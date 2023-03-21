/**
 * A list of common utility functions that can used throughout the system
 */

// top level imports
import { IncomingMessage } from 'http'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'

// types
import { IAuthUser } from './types'

export const isAuthenticated = async (
	req: IncomingMessage & {
		cookies: NextApiRequestCookies
	}
): Promise<boolean> => {
	const token = req.cookies.authorization
	return !!token
}

/**
 * @returns {IAuthUser | null}
 * @description returns auth user from local storage
 */
export const storageToState = (): IAuthUser | null => {
	if (typeof window !== 'undefined') {
		return JSON.parse(localStorage.getItem('devconnect_user') as string)
	}
	return null
}

/**
 * @params <number>
 * @returns <void>
 * @description delays the execution for specified number of milliseconds
 */
export const delay = (ms: number): Promise<void> => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

/**
 * @param {string} key
 * @param {any} payload
 * @description Store the given object into local storage
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const storeInStorage = (key: string, payload: any): void => {
	if (typeof window !== 'undefined') {
		localStorage.setItem(key, JSON.stringify(payload))
	}
}
