// top level imports
import { ReactElement } from 'react'

// Atoms / Molecules / Organisms
import { AppLayout } from '@/components/organisms/AppLayout'
import { LoginForm } from '@/components/organisms/LoginForm'
import { withAuth } from '@/components/miscellaneous/withAuth'

// Component definitions
function Login(): ReactElement {
	return (
		<AppLayout>
			<LoginForm />
		</AppLayout>
	)
}

export default withAuth(Login)
