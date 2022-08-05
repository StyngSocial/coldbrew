import create from "zustand"
import { getRankedPosts } from "../api/bridge"
import { ColdBrew, Observer } from "../util/constants"

export const useHiveStore = create((set) => ({
  posts: [],
  getHiveRankedPosts: async () => {
    const posts = await getRankedPosts("created", ColdBrew, Observer)
    set({posts: posts})
  },
  getHiveTrendingPosts: async () => {
    const posts = await getRankedPosts("hot", ColdBrew, Observer)
    set({posts: posts})
  }
}))