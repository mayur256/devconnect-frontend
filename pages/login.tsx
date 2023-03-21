// top level imports
import { ReactElement } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

// Atoms / Molecules / Organisms
import { AppLayout } from '@/components/organisms/AppLayout'
import { LoginForm } from '@/components/organisms/LoginForm'

// Utils
import { isAuthenticated } from '@utils/Common'

// Component definitions
function Login(): ReactElement {
	return (
		<AppLayout>
			<LoginForm />
		</AppLayout>
	)
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const { req } = context
	const isLoggedInUser = await isAuthenticated(req)

	if (isLoggedInUser) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	return {
		props: {},
	}
}

export default Login
