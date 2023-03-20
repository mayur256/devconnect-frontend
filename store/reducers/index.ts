// constituent reducers
import userReducer from './userSlice'

// combine reducers
export const rootReducer = {
	user: userReducer,
}
