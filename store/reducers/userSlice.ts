/* eslint-disable @typescript-eslint/no-unused-vars */
// redux-package
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Utilities
import { storageToState } from '@utils/Common'
import { IAuthUser } from '@utils/types'

const authUser: IAuthUser | null = storageToState()

const initialState: IAuthUser = {
	_id: '',
	name: '',
	email: '',
}

// slice definition
const userSlice = createSlice({
	name: 'user',
	initialState: authUser ?? initialState,
	reducers: {
		SET_CURRENT_USER: (
			state = initialState,
			action: PayloadAction<IAuthUser>
		) => {
			state = action.payload
		},

		CLEAR_CURRENT_USER: (state = initialState) => {
			state = initialState
		},
	},
})

// actions
export const { SET_CURRENT_USER, CLEAR_CURRENT_USER } = userSlice.actions

// reducer
export default userSlice.reducer
