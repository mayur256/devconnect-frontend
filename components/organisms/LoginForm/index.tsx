// Top level imports
import React from 'react'

// Antd
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface'

// Side effect imports
import styles from './LoginForm.module.scss'

// Component definition
export const LoginForm: React.FC = () => {
	const onFinish = (values: string) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: ValidateErrorEntity<string>) => {
		console.log('Failed:', errorInfo)
	}

	// Main renderer
	return (
		<div id={styles['components-form-demo-normal-login']}>
			<Form
				name="login-form"
				className="login-form"
				initialValues={{ remember: true }}
				style={{ marginTop: '2rem' }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
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

				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
				>
					<Input.Password
						prefix={
							<LockOutlined className="site-form-item-icon" />
						}
						placeholder="Password"
					/>
				</Form.Item>

				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a className="login-form-forgot" href="">
						Forgot password
					</a>
				</Form.Item>

				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
					>
						Log in
					</Button>
					Or <a href="">register now!</a>
				</Form.Item>
			</Form>
		</div>
	)
}
