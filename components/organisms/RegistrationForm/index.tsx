// top level imports
import { ReactElement } from 'react'

// Antd
import { Form, Row, Col, Typography, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

// Component definition
export function RegistrationForm(): ReactElement {
	const onFinish = (values: string) => {
		console.log('Success:', values)
	}

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
					<Typography.Title level={2}>Registration</Typography.Title>
				</Col>
			</Row>

			{/** User Email */}
			<Row>
				<Col xs={24}>
					<Form.Item
						name="username"
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
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

			{/** User Password */}
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

			{/** User Confirm Password */}
			<Row>
				<Col xs={24}>
					<Form.Item
						name="confirm-password"
						dependencies={['password']}
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (
										!value ||
										getFieldValue('password') === value
									) {
										return Promise.resolve()
									}
									return Promise.reject(
										new Error(
											'The two passwords that you entered do not match!'
										)
									)
								},
							}),
						]}
					>
						<Input
							prefix={
								<LockOutlined className="site-form-item-icon" />
							}
							type="password"
							placeholder="Confirm Password"
						/>
					</Form.Item>
				</Col>
			</Row>

			{/** Submit button */}
			<Row>
				<Col xs={24}>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							style={{ width: '100%' }}
						>
							Create Account
						</Button>
					</Form.Item>
				</Col>
			</Row>

			<Row>
				<Col xs={16} className="text-end">
					<a className="login-form-forgot" href="">
						Already an account? Login
					</a>
				</Col>
			</Row>
		</Form>
	)
}
