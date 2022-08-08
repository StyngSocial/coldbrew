import hive from "@hiveio/hive-js";

/**
 // Returns account specific feeds.
 * @param {*} sort Supported values
 *     blog - top posts authored by given account (excluding posts to communities - unless explicitely reblogged) plus reblogs ranked by creation/reblog time
 *     feed - top posts from blogs of accounts that given account is following ranked by creation/reblog time, not older than last month
 *     posts - op posts authored by given account, newer first comments - replies authored by given account, newer first
 *     replies - replies to posts of given account, newer first
 *     payout - all posts authored by given account that were not yet cashed out
 * @param account name, points to valid account
 * @param {*} limit
 */
export const getHiveAccountFeed = (
  sort: String,
  account: String,
  limit: Number
) => {
  let params = {
    sort: sort,
    account: account,
    limit: limit,
  };
  let feed = hive.api
    .callAsync("bridge.get_account_posts", params)
    .then((res) => {
      return res;
    });

  return feed;
};

/**
 // Retrieves feed posts ranked by filter with a given tag or community.
 * @param sort 
 *  * hot
 *  * created
 *  * promoted
 *  * payout
 *  * payout_comments
 *  * muted
 * @param tag 
 *  * Community tag or hashtag
 * @param observer 
 *  * Active account
 */
export const getHiveRankedPosts = (sort: String, tag: String, observer: String) => {
  let params = {
    sort: sort,
    tag: tag,
    observer: observer,
  };

  let posts = hive.api
    .callAsync("bridge.get_ranked_posts", params)
    .then((res) => {
      return res;
    });

  return posts;
};

// Popular community types
type PopCommunity = {
  category: String;
  name: String;
};
type PopCommunitiesList = Array<PopCommunity>;

/**
 // Returns a list of popular communities
 * @param limit 
 * * Number limit of communities to return
 */
export const getHivePopularCommunities = (limit: Number) => {
  const params = {
    limit,
  };
  return new Promise((resolve, reject) => {
    hive.api
      .callAsync("bridge.list_pop_communities", params)
      .then((resp: Array<any>) => {
        const popCommunities: PopCommunitiesList = [];
        resp.map((hivePopCommunities) => {
          const comObj: PopCommunity = {
            category: hivePopCommunities[0],
            name: hivePopCommunities[1],
          };
          popCommunities.push(comObj);
        });
        resolve(popCommunities);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
};

/**
 // Retrieves community by name 
 * @param communityId
 * * Community by hivemind ID
 */
export const getHiveCommunityByName = (communityId: String, observer: String) => {
  let params = {
    name: communityId,
    observer: observer,
  };
  let community = hive.api
    .callAsync("bridge.get_community", params)
    .then((res) => {
      return res;
    });

  return community;
};

// Community subscription types
type Subscriber = {
  username: String;
  role: String;
  date: Date;
};
type SubscribersList = Array<Subscriber>;
/**
 // Returns a list of subscribed accounts to a community
 * @param community 
 * * Community by hivemind ID ex. Cold Brew -> hive-152197
 * @param limit 
 * * Limit of returned subscribers
 * @param last 
 * * OPTIONAL used to paginate subscribers. Indexed by username.
 */
export const getHiveCommunitySubscribers = (
  community: String,
  limit: Number,
  last?: String // used for pagination by username
) => {
  let params = {
    community: community,
    limit: limit,
    last: last,
  };
  return new Promise((resolve, reject) => {
    hive.api.callAsync("bridge.list_subscribers", params).then((resp) => {
      const communitySubs: SubscribersList = [];
      resp.map((subscriptions) => {
        const subscriber: Subscriber = {
          username: subscriptions[0],
          role: subscriptions[1],
          date: new Date(subscriptions[2]),
        };
        communitySubs.push(subscriber);
      });
      resolve(communitySubs);
    });
  });
};

/**
 // Get profile by name
 * @param username
 * * Username of account look up
 * @param observer
 * * Username of active account
 */
export const getHiveProfile = (username: String, observer: String) => {
  let params = {
    account: username,
    observer: observer,
  };
  let profile = hive.api.callAsync("bridge.get_profile", params).then((res) => {
    return res;
  });

  return profile;
};

/**
 // Returns a post and replies given an author and permlink
 * @param author 
 * * Username of poster. Could be community or useraccount.
 * @param permlink 
 * * Canonical link to post.
 * @param observer 
 * * Active user
 */
export const getHivePost = async (author: String, permlink: String, observer: String) => {
  let params = {
    author: author,
    permlink: permlink,
    observer: observer,
  };
  const post = await hive.api.callAsync("bridge.get_discussion", params)
  const posts = Object.values(post)

  return posts;
};
