// Top level imports
import { ReactElement } from 'react'

// Atoms / Molecules / Organisms
import { AppLayout } from '@/components/organisms/AppLayout'
import { RegistrationForm } from '@/components/organisms/RegistrationForm'

// Component definition
export default function Registration(): ReactElement {
	return (
		<AppLayout>
			<RegistrationForm />
		</AppLayout>
	)
}
