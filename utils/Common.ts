/**
 * A list of common utility functions that can used throughout the system
 */

// top level imports
import { NextRequest } from 'next/server'

// types
import { IAuthUser } from './types'

export const isAuthenticated = async (req: NextRequest): Promise<boolean> => {
	const token = req.cookies.get('authorization')
	await new Promise((resolve) => setTimeout(resolve, 100))
	return !!token
}

/**
 * @returns {IAuthUser | null}
 * @description returns auth user from local storage
 */
export const storageToState = (): IAuthUser | null => {
	return JSON.parse(localStorage.getItem('devconnect_user') as string)
}
