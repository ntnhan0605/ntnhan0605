import { UserStore, initialStoreUser, userStore } from '@/stores/user'
import { useMemo } from 'react'
import { StoreApi, UseBoundStore, create } from 'zustand'
import { devtools } from 'zustand/middleware'

/** Add more typeof store for all store */
export type ZustandStore = UserStore

let store: UseBoundStore<StoreApi<ZustandStore>> | undefined

/** Add more store initialStore for all store */
export const inititalStore: ZustandStore = {
  ...initialStoreUser
}

export const initStore = (preloadState = inititalStore) => {
  const zustandStore = create<ZustandStore>()(
    devtools(
      (...a) => {
        /** Add more store in `initialState` */
        const initialState = { ...inititalStore, ...userStore(...a) }

        /** Remove field has `function` in `preloadState` */
        Object.keys(preloadState).forEach((k) => {
          const key = k as keyof typeof preloadState
          if (typeof preloadState[key] !== 'function') {
            initialState[key] = preloadState[key] as any
          }
        })
        return initialState
      },
      { enabled: process.env.NODE_ENV !== 'production' }
    )
  )
  return zustandStore
}

export const initializeStore = (preloadedState: ZustandStore) => {
  let _store = store ?? initStore(preloadedState)

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    })
    store = undefined
  }

  if (typeof window === 'undefined') return _store

  if (!store) store = _store

  return _store
}

export function useHydrate(initialState?: Partial<ZustandStore>) {
  const state =
    typeof initialState === 'string' ? JSON.parse(initialState) : initialState

  const store = useMemo(() => initializeStore(state), [state])

  return store
}
