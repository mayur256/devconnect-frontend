/**
 * File containing the definition for API function calls
 */

// Utils
import { fetchWrapper } from './fetchWrapper'

// Types
import { IAuthUser, IResponseStruct, LoginPayload } from './types'

/**
 * @description - Invokes the login api from client
 * @param {LoginPayload} loginPayload
 */
export const login = async (
	loginPayload: LoginPayload
): Promise<IResponseStruct<IAuthUser> | undefined> => {
	try {
		const jsonRes = await fetchWrapper('/user/login', {
			method: 'POST',
			payload: loginPayload,
		})

		return await jsonRes?.json()
	} catch (error) {
		console.error(error)
	}
}

export const logout = async (): Promise<IResponseStruct<null> | undefined> => {
	try {
		const jsonRes = await fetchWrapper('/user/logout', { method: 'PUT' })

		return await jsonRes?.json()
	} catch (error) {
		console.error(error)
	}
}
