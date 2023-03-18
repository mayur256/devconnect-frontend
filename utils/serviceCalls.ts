/**
 * File containing the definition for API function calls
 */

// Utils
// Constants
import { BASE_API_URL, API_METHOD } from './Constants'
// Types
import { LoginPayload } from './types'

/**
 * @description - Invokes the login api from client
 * @param {LoginPayload} loginPayload
 */
export const login = async (loginPayload: LoginPayload): Promise<void> => {
	try {
		const jsonRes = await fetch(`${BASE_API_URL}/login`, {
			method: API_METHOD.POST,
			body: JSON.stringify(loginPayload),
		})

		const response = await jsonRes.json()

		console.log(response)
	} catch (error) {
		console.error(error)
	}
}
