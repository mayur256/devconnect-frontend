// top level imports
import { ReactElement, ComponentPropsWithRef, SyntheticEvent } from 'react'

// Antd
import { Input } from 'antd'

// Props type definition
interface TextType extends ComponentPropsWithRef<typeof Input> {
	value: string
	onChange: (event: SyntheticEvent<HTMLInputElement>) => void
}

// Component definition
export function TextField({ value = '', onChange }: TextType): ReactElement {
	return <Input value={value} onChange={onChange} />
}
