// top level imports
import { ReactElement } from 'react'
import Link from 'next/link'

// AntD Components
import { Layout, Menu } from 'antd'
const { Header: AHeader } = Layout

// types
import type { MenuProps } from 'antd'
import { Logo } from '@/components/atoms/Logo'

const menuLinks: MenuProps['items'] = [
	{ key: 'login', label: 'Login' },
	{ key: 'registration', label: 'Registration' },
].map(({ key, label }) => ({
	key,
	label: <Link href={key}>{label}</Link>,
}))

// Component definition
export function Header(): ReactElement {
	return (
		<AHeader>
			<Logo src="/devcon.png" />

			<Menu theme="dark" mode="horizontal" items={menuLinks} />
		</AHeader>
	)
}
