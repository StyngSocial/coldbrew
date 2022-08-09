import hive from '@hiveio/hive-js'

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
export const getHiveAccountFeed = async (
  sort: String,
  account: String,
  limit: Number,
) => {
  const params = {
    sort: sort,
    account: account,
    limit: limit,
  }
  const feed = await hive.api.callAsync('bridge.get_account_posts', params)

  return feed
}

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
export const getHiveRankedPosts = async (
  sort: String,
  tag: String,
  observer: String,
) => {
  const params = {
    sort: sort,
    tag: tag,
    observer: observer,
  }
  
  const posts = await hive.api.callAsync('bridge.get_ranked_posts', params)

  return posts
}

// Popular community types
type PopCommunity = {
  category: String
  name: String
}
type PopCommunitiesList = Array<PopCommunity>

/**
 // Returns a list of popular communities
 * @param limit 
 * * Number limit of communities to return
 */
export const getHivePopularCommunities = async (limit: Number) => {
  const params = {
    limit,
  }
  const popularCommunities: PopCommunitiesList = []
  const hiveCommunities = await hive.api.callAsync("bridge.list_pop_communities", params)
  hiveCommunities.map((community) => {
    const comObj: PopCommunity = {
      category: hiveCommunities[0],
      name: hiveCommunities[1]
    }
    popularCommunities.push(comObj)
  })
  return popularCommunities
}

/**
 // Retrieves community by name 
 * @param communityId
 * * Community by hivemind ID
 */
export const getHiveCommunityByName = async (
  communityId: String,
  observer: String,
) => {
  const params = {
    name: communityId,
    observer: observer,
  }

  const community = hive.api.callAsync('bridge.get_community', params)

  return community
}

// Community subscription types
type Subscriber = {
  username: String
  role: String
  date: Date
}
type SubscribersList = Array<Subscriber>
/**
 // Returns a list of subscribed accounts to a community
 * @param community 
 * * Community by hivemind ID ex. Cold Brew -> hive-152197
 * @param limit 
 * * Limit of returned subscribers
 * @param last 
 * * OPTIONAL used to paginate subscribers. Indexed by username.
 */
export const getHiveCommunitySubscribers = async (
  community: String,
  limit: Number,
  last?: String, // used for pagination by username
) => {
  let params = {
    community: community,
    limit: limit,
    last: last,
  }

  const subscribers: SubscribersList = []
  const hiveSubscribers = await hive.api.callAsync('bridge.list_subscribers', params)
  hiveSubscribers.map((subscriber) => {
    const subscriberObj: Subscriber = {
      username: subscriber[0],
      role: subscriber[1],
      date: new Date(subscriber[2]),
    }
        subscribers.push(subscriberObj)
  })
  return subscribers
}

/**
 // Get profile by name
 * @param username
 * * Username of account look up
 * @param observer
 * * Username of active account
 */
export const getHiveProfile = async (username: String, observer: String) => {
  let params = {
    account: username,
    observer: observer,
  }
  let profile = await hive.api.callAsync('bridge.get_profile', params)

  return profile
}

/**
 // Returns a post and replies given an author and permlink
 * @param author 
 * * Username of poster. Could be community or useraccount.
 * @param permlink 
 * * Canonical link to post.
 * @param observer 
 * * Active user
 */
export const getHivePost = async (
  author: String,
  permlink: String,
  observer: String,
) => {
  let params = {
    author: author,
    permlink: permlink,
    observer: observer,
  }
  const post = await hive.api.callAsync('bridge.get_discussion', params)
  const posts = Object.values(post)

  return posts
}
