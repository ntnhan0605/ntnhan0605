import { ZustandStore } from '@/utils/store'
import { StateCreator } from 'zustand'

export type UserStore = {
  user: string | null
  login?: (username: string, password: string) => void
}

export const initialStoreUser: UserStore = {
  user: null
}

export const userStore: StateCreator<ZustandStore, [], [], UserStore> = (
  set
) => {
  return {
    ...initialStoreUser,
    login(username, password) {
      set({ user: username })
    }
  }
}
