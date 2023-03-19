/**
 * A list of common utility functions that can used throughout the system
 */

// top level imports
import { NextRequest } from 'next/server'

export const isAuthenticated = async (req: NextRequest): Promise<boolean> => {
	const token = req.cookies.get('authorization')
	await new Promise((resolve) => setTimeout(resolve, 100))
	return !!token
}
