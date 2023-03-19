/* eslint-disable @typescript-eslint/no-explicit-any */
// top level imports
import { ReactElement, useEffect } from 'react'

// Next router
import { useRouter } from 'next/router'
import type { NextRouter } from 'next/router'

// Component definition
export function withAuth(
	Component: () => ReactElement
): (props: any) => ReactElement | null {
	const Auth = (props: any) => {
		const router: NextRouter = useRouter()
		const isAuthenticated = true

		useEffect(() => {
			if (!isAuthenticated) {
				router.replace('/login')
			}
		}, [])

		return isAuthenticated ? <Component {...props} /> : null
	}

	return Auth
}
