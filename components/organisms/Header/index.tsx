// top level imports
import { ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'

// React-Redux
import { useSelector } from 'react-redux'
import type { RootState } from 'store/types'

// AntD Components
import { Layout, Menu } from 'antd'
const { Header: AHeader } = Layout

// types
import type { MenuProps } from 'antd'
import { Logo } from '@/components/atoms/Logo'

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

	useEffect(() => {
		const linkAtoms = userAuthenticated ? [] : loginRoutes
		const menuLinks: MenuProps['items'] = linkAtoms.map(
			({ key, label }) => ({
				key,
				label: <Link href={key}>{label}</Link>,
			})
		)

		setMenuLinks(menuLinks)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userAuthenticated])

	// Main renderer
	return (
		<AHeader>
			<Logo src="/devcon.png" />

			<Menu theme="dark" mode="horizontal" items={menuLinks} />
		</AHeader>
	)
}
