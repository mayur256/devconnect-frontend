/**
 * Constants that can be used throughout the application
 */
export const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string
export const API_METHOD = {
	POST: 'post',
	GET: 'get',
	PUT: 'put',
	PATCH: 'patch',
	DELETE: 'delete',
}
