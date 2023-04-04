import { makeStore } from './index'

// infer type of store
export type AppStore = ReturnType<typeof makeStore>

// infer type of rootstate from the store
export type RootState = ReturnType<AppStore['getState']>

// infer type for dispatch used in this application based on store's dispatch
export type AppDispatch = AppStore['dispatch']
