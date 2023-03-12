// top level imports
import { ReactElement } from 'react'
import Image from 'next/image'

// styles
import styles from './Logo.module.scss'

// Props type definitions
interface IProps {
	src: string
}

// Component definition
export function Logo({ src }: IProps): ReactElement {
	return (
		<div className={styles['logo']}>
			<Image src={src} width={120} height={60} alt="Logo" />
		</div>
	)
}
