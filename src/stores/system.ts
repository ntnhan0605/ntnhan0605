import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { indexedDBStorage } from './indexedDBStorage'

type SystemState = {
  status: 'booting' | 'locked' | 'running' | 'sleep' | 'off'
  wallpaper: string
}

type SystemActions = {
  setStatus: (status: SystemState['status']) => void
  setWallpaper: (wallpaper: string) => void
}

export type SystemStore = SystemState & SystemActions

export const SYSTEM_INIT: SystemStore = {
  status: 'booting',
  wallpaper: '/images/wallpaper.jpg',
  setStatus: () => {},
  setWallpaper: () => {},
}

export const useSystem = create<SystemStore>()(
  persist(
    (set) => ({
      ...SYSTEM_INIT,
      setStatus: (status) => set({ status }),
      setWallpaper: (wallpaper) => set({ wallpaper }),
    }),
    { name: 'system-db', storage: createJSONStorage(() => indexedDBStorage) },
  ),
)
