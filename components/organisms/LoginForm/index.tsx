// Top level imports
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// React-Redux
import { useDispatch } from 'react-redux'
import { SET_CURRENT_USER } from 'store/reducers/userSlice'
import { AppDispatch } from 'store/types'

// Antd
import { Button, Checkbox, Form, Input, Row, Col, Typography } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
// import type { ValidateErrorEntity } from 'rc-field-form/lib/interface'

// Utils
import { storeInStorage } from '@utils/Common'
// - Types
import { LoginPayload } from 'utils/types'
// - Service calls
import { login } from 'utils/serviceCalls'
// - Constants
import { STATUS } from '@utils/Constants'

// Component definition
export const LoginForm: React.FC = () => {
	// Hooks
	const dispatch: AppDispatch = useDispatch()
	const router = useRouter()

	/** Handler functions - starts */

	const onFinish = async (values: LoginPayload): Promise<void> => {
		const { email, password } = values
		const response = await login({ email, password })
		if (response?.status === STATUS.SUCCESS) {
			const { _id, name, email } = response.data
			storeInStorage('devconnect_user', { _id, name, email })
			dispatch(SET_CURRENT_USER({ _id, name, email }))
			router.push('/')
		}
	}

	// Main renderer
	return (
		<Form
			name="basic"
			initialValues={{ remember: true }}
			style={{ marginTop: '2rem' }}
			onFinish={onFinish}
			autoComplete="off"
			wrapperCol={{
				md: { offset: 8, span: 8 },
				sm: { offset: 4, span: 16 },
			}}
		>
			<Row>
				<Col xs={24} className="text-center">
					<Typography.Title level={2}>Login</Typography.Title>
				</Col>
			</Row>

			<Row>
				<Col xs={24}>
					<Form.Item
						name="email"
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please enter your email!',
							},
						]}
					>
						<Input
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
							placeholder="Email"
						/>
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col xs={24}>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input
							prefix={
								<LockOutlined className="site-form-item-icon" />
							}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col xs={24}>
					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col xs={24}>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							style={{ width: '100%' }}
						>
							Log me in
						</Button>
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col
					sm={{ offset: 4, span: 6 }}
					xs={{ span: 6 }}
					md={{ offset: 8, span: 2 }}
				>
					<Link href="/">Forgot password?</Link>
				</Col>

				<Col
					sm={{ offset: 6, span: 6 }}
					xs={{ span: 6 }}
					md={{ offset: 4, span: 2 }}
				>
					<Link href="/registration">Create account!</Link>
				</Col>
			</Row>
		</Form>
	)
}
