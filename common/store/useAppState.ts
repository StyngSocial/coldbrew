import create from "zustand";

export const useAppStore = create((set) => ({
  loading: true,
  setLoadingFalse: () => set({loading: false}),
  setLoadingTrue: () => set({loading: true})
}))