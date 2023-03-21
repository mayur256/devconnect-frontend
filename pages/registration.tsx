// Top level imports
import { ReactElement } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

// Atoms / Molecules / Organisms
import { AppLayout } from '@/components/organisms/AppLayout'
import { RegistrationForm } from '@/components/organisms/RegistrationForm'

// Utils
import { isAuthenticated } from '@utils/Common'

// Component definition
export default function Registration(): ReactElement {
	return (
		<AppLayout>
			<RegistrationForm />
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
