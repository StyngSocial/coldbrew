import { useReducer, useEffect } from "react";
import { getFollowingFeed } from "../../pages/api/hive/bridge";

/**
 *
 * @param {*} sort Supported values
 *     @param blog -top posts authored by given account (excluding posts to communities - unless explicitely reblogged) plus reblogs ranked by creation/reblog time
 *     @param feed - top posts from blogs of accounts that given account is following ranked by creation/reblog time, not older than last month
 *     @param posts - op posts authored by given account, newer first comments - replies authored by given account, newer first
 *     @param replies - replies to posts of given account, newer first
 *     @param payout - all posts authored by given account that were not yet cashed out
 * @param {*} account
 * @param {*} limit
 * @param account name, points to valid account
 * @returns
 */

const useFollowingFeed = (sort, account, limit) => {
  const initialState = {
    feed: [],
    loading: false,
    error: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...state, loading: true };
      case "FETCHED":
        return { ...state, loading: false };
      case "ERROR":
        return { ...state, loading: false, error: true };
      default:
        return state;
    }
  };
  useEffect(() => {
    fetchFeed();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchFeed = () => {
    getFollowingFeed(sort, account, limit).then((res) => {
      state.feed = res;
      dispatch({ type: "FETCHED" });
      return;
    });
  };
  return [state];
};
export default useFollowingFeed;
