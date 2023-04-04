// redux packages
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

// Store types
import type { AppStore } from './types'

// reducer
import { rootReducer } from './reducers'

/* export const store = configureStore({
    reducer: rootReducer,
})*/
export const makeStore = () => configureStore({ reducer: rootReducer })

export const wrapper = createWrapper<AppStore>(makeStore)
