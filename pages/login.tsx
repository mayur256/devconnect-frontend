// top level imports
import { ReactElement } from 'react'

// Atoms / Molecules / Organisms
import { AppLayout } from '@/components/organisms/AppLayout'
import { LoginForm } from '@/components/organisms/LoginForm'

// Component definitions
export default function Login(): ReactElement {
	return (
		<AppLayout>
			<LoginForm />
		</AppLayout>
	)
}
