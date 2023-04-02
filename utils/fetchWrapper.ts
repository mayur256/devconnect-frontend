/* eslint-disable @typescript-eslint/no-explicit-any */
// Utilities
import { BASE_API_URL } from './Constants'

type Method = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
type Include = 'include'

interface FetchRequestOptions {
	method: Method
	headers: any
	body: any
	credentials: Include
}

type OptionalFetchParams = {
	method?: Method
	payload?: null | object
	customHeaders?: null | object
}

export const fetchWrapper = async (
	url: string,
	{ method = 'GET', payload = null, customHeaders = {} }: OptionalFetchParams
): Promise<any> => {
	const requestOptions: Partial<FetchRequestOptions> = {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			...customHeaders,
		},
		credentials: 'include',
	}

	if (payload) {
		requestOptions.body = JSON.stringify(payload)
	}

	return fetch(`${BASE_API_URL}${url}`, requestOptions).catch((error) =>
		console.error(error)
	)
}
