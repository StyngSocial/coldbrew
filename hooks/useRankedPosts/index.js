import { useReducer, useEffect } from "react";
import { getRankedPosts } from "../../pages/api/hive/bridge";

const useRankedPosts = (sort, tag, observer) => {
  const initialState = {
    posts: [],
    loading: false,
    error: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...state, loading: true };
      case "FETCHED":
        return { ...state, posts: action.payload, loading: false };
      case "ERROR":
        return { ...state, loading: false, error: true };
      default:
        return state;
    }
  };
  useEffect(() => {
    fetchRankedPosts();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchRankedPosts = () => {
    getRankedPosts(sort, tag, observer).then((res) => {
      state.posts = res;
      dispatch({ type: "FETCHED", payload: res });
      return;
    });
  };

  return [state];
};
export default useRankedPosts;
