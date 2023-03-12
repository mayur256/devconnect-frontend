// Top level imports
import React from 'react'
import Link from 'next/link'

// Antd
import { Button, Checkbox, Form, Input, Row, Col, Typography } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
// import type { ValidateErrorEntity } from 'rc-field-form/lib/interface'

// Component definition
export const LoginForm: React.FC = () => {
	const onFinish = (values: string) => {
		console.log('Success:', values)
	}

	/* const onFinishFailed = (errorInfo: ValidateErrorEntity<string>) => {
		console.log('Failed:', errorInfo)
	} */

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
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!',
							},
						]}
					>
						<Input
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
							placeholder="Username"
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
