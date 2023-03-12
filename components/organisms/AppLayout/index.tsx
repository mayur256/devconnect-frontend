// top level imports
import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'

// Antd components
import { Layout } from 'antd'

// Atoms / Molecules / Organisms
import { Header } from '../Header'

// Props type definitions
interface IProps {
	title?: string
	description?: string
	children?: ReactNode
}

// Component definition
export function AppLayout({
	title = 'Devconnect',
	description = '',
	children,
}: IProps): ReactElement {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={description} name="description" />
			</Head>

			<Layout>
				<Header />

				{children}
			</Layout>
		</>
	)
}
