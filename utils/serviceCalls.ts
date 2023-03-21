/**
 * File containing the definition for API function calls
 */

// Utils
// Constants
import { BASE_API_URL, API_METHOD } from './Constants'
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
		const jsonRes = await fetch(`${BASE_API_URL}/user/login`, {
			method: API_METHOD.POST,
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
			},
			body: JSON.stringify(loginPayload),
		})

		return await jsonRes.json()
	} catch (error) {
		console.error(error)
	}
}
