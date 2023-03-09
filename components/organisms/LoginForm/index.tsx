// Top level imports
import React from 'react';

// Antd
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface';

// Component definition
export const LoginForm: React.FC = () => {
    const onFinish = (values: string) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: ValidateErrorEntity<string>) => {
        console.log('Failed:', errorInfo);
    };

    // Main renderer
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            style={{ marginTop: '2rem' }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelCol={{ md: 8 }}
            wrapperCol={{ md: 8, sm: 24 }}
        >
            <Row>
                <Col xs={24}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col xs={24}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col xs={24}>
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col xs={24}>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>

        </Form>
    )
}
