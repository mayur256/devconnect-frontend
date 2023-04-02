// top level imports
import { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import Link from 'next/link'

// React-Redux
import { useSelector } from 'react-redux'
import type { RootState } from 'store/types'

// AntD Components
import { Layout, Menu } from 'antd'
const { Header: AHeader } = Layout

// Atoms / Molecules / Organisms
import { Logo } from '@/components/atoms/Logo'

// types
import type { MenuProps } from 'antd'
import { MenuClickEventHandler } from 'rc-menu/lib/interface'

// Utils
// -  Service Calls
import { logout } from '@utils/serviceCalls'
// - Constants
import { STATUS } from '@utils/Constants'

// Component definition
export function Header(): ReactElement {
	// Constants
	const loginRoutes = [
		{ key: 'login', label: 'Login' },
		{ key: 'registration', label: 'Registration' },
	]

	// state definitions
	const [menuLinks, setMenuLinks] = useState<MenuProps['items']>([])

	// Hooks
	const user = useSelector((state: RootState) => state.user)
	const userAuthenticated = !!user?._id
	const router = useRouter()

	useEffect(() => {
		const linkAtoms = userAuthenticated
			? [{ key: 'logout', label: 'Logout' }]
			: loginRoutes
		const menuLinks: MenuProps['items'] = linkAtoms.map(
			({ key, label }) => ({ key, label })
		)

		setMenuLinks(menuLinks)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userAuthenticated])

	/** Handler functions - starts */

	const handleMenuClick: MenuClickEventHandler = (event): void => {
		const eventHandlerMap: { [key: string]: () => void } = {
			login: () => router.push('/login'),
			registration: () => router.push('/registration'),
			logout: () => handleLogout(),
		}

		eventHandlerMap[event.key]?.()
	}

	const handleLogout = async (): Promise<void> => {
		const response = await logout()
		if (response?.status === STATUS.SUCCESS) {
			router.push('/login')
		}
	}

	/** Handler functions - starts */

	// Main renderer
	return (
		<AHeader>
			<Logo src="/devcon.png" />

			<Menu
				theme="dark"
				mode="horizontal"
				items={menuLinks}
				onClick={handleMenuClick}
			/>
		</AHeader>
	)
}
