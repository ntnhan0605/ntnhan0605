import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { indexedDBStorage } from './indexedDBStorage'

type SystemState = {
  status: 'booting' | 'locked' | 'running' | 'sleep' | 'off'
}

type SystemActions = {
  setStatus: (status: SystemState['status']) => void
}

export type SystemStore = SystemState & SystemActions

export const SYSTEM_INIT: SystemStore = {
  status: 'booting',
  setStatus: () => {},
}

export const useSystem = create<SystemStore>()(
  persist(
    (set) => ({
      ...SYSTEM_INIT,
      setStatus: (status) => set({ status }),
    }),
    { name: 'system-db', storage: createJSONStorage(() => indexedDBStorage) },
  ),
)
