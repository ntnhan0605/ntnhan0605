import { get, set, del } from 'idb-keyval'
import type { StateStorage } from 'zustand/middleware'

export const indexedDBStorage: StateStorage = {
  getItem: async (key: string): Promise<string | null> => {
    return (await get(key)) || null
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value)
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name)
  },
}
