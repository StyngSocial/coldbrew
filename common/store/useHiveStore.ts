import create from "zustand"
import { getHiveAccountFeed, getHiveCommunityByName, getHiveCommunitySubscribers, getHivePopularCommunities, getHivePost, getHiveProfile, getHiveRankedPosts } from "../api/bridge"
import { ColdBrew, Observer } from "../util/constants"

export const useHiveStore = create((set) => ({
  posts: [],
  sort: "feed",
  getRankedPosts: async () => {
    const posts = await getHiveRankedPosts("created", ColdBrew, Observer)
    set({posts: posts})
  },
  getTrendingPosts: async () => {
    const posts = await getHiveRankedPosts("hot", ColdBrew, Observer)
    set({posts: posts})
  },
  getAccountFeed: async () => {
    const posts = await getHiveAccountFeed("feed", Observer, 20)
    set({posts: posts})
  },
  getPopularCommunities: async () => {
    const communities = await getHivePopularCommunities(20)
    return communities
  },
  getCommunityByName: async (communityId: string) => {
    const community = await getHiveCommunityByName(communityId, Observer)
    return community
  },
  getCommunitySubscribers: async (community:string, limit:number, last?:string) => {
    const subscribers = await getHiveCommunitySubscribers(community, limit, last)
    return subscribers
  },
  getProfile: async (username:string) => {
    const profile = await getHiveProfile(username, Observer)
    return profile
  },
  getPost: async (author:string, permlink:string) => {
    const profile = await getHivePost(author, permlink, Observer)
    return profile
  }
}))