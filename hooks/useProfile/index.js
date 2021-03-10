import { useReducer, useEffect } from "react";
import { getHiveProfile } from "../../pages/api/hive/bridge";

const useProfile = (type, username, observer) => {
  const initialState = {
    user: {},
    loading: false,
    error: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...state, loading: true };
      case "FETCHED":
        return { ...state, user: action.payload, loading: false };
      case "ERROR":
        return { ...state, loading: false, error: true };
      default:
        return state;
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProfile = () => {
    getHiveProfile(username, observer).then((res) => {
      if (type === "base") {
        const BaseProfile = {
          id: res.id,
          username: res.name,
          reputation: res.reputation,
          name: res.metadata.profile.name,
          about: res.metadata.profile.about,
          cover_image: res.metadata.profile.cover_image,
          profile_image: res.metadata.profile.profile_image,
        };

        return dispatch({ type: "FETCHED", payload: BaseProfile });
      } else {
        return dispatch({ type: "FETCHED", payload: res });
      }
    });
  };

  return [state];
};

export default useProfile;
