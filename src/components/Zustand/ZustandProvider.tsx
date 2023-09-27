import { FC, ReactNode, createContext, useContext } from 'react'
import { StoreApi, UseBoundStore } from 'zustand'
import { ZustandStore, initStore, inititalStore } from '../../utils/store'

export const StoreContext = createContext<
  UseBoundStore<StoreApi<ZustandStore>>
>(initStore(inititalStore))

export type StoreProviderProps = {
  children: ReactNode
  store: UseBoundStore<StoreApi<ZustandStore>>
}
export const StoreProvider: FC<StoreProviderProps> = ({ children, store }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = (
  selector: (state: ZustandStore) => ZustandStore = (state) => state,
  eqFn: (a: unknown, b: unknown) => boolean = () => true
) => {
  const store = useContext(StoreContext)
  const values = store<ZustandStore>(selector, eqFn)

  return values
}
