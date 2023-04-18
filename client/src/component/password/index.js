import { Col, Row, Input, Space, Button, Form, message } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Password = () => {
    const [form] = Form.useForm();
    const params = useParams();

    const [formError, setFormError] = useState(null);

    const handleSubmit = async (values) => {
        if (values.newPassword !== values.confirmPassword) {
        setFormError('Passwords do not match.');
        return;
        }
        setFormError(null);

        const data = { password: values.newPassword };

        try {
        const response = await axios.put(`http://localhost:3000/api/users/changepassword/${params.id}`, data);
        message.success('Password changed successfully!');
        form.resetFields();
        } catch (error) {
        console.log(error.response.data);
        message.error('Failed to change password.');
        }
    };

    return (
        <>
            <Row>
                <Col span={24}><h1>Set Password</h1></Col>
                <Col span={24}>
                    <p>For your account's security, do not share your password with anyone else</p>
                </Col>
            </Row>
            <div style={{borderBottom: 'solid white 1px'}}>
                <br />
            </div>
            <div>
                <br />
                <br />
            </div>
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                form={form} 
                onFinish={handleSubmit}
            >
                <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={[{ required: true, message: 'Please enter a new password.' }]}
                    >
                    <Input.Password style={{background: '#2c353d'}} />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={['newPassword']}
                    hasFeedback
                    validateTrigger={['onBlur']}
                    validateFirst
                    rules={[
                        { required: true, message: 'Please confirm your new password.' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('newPassword') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('Passwords do not match.');
                            },
                        }),
                    ]}
                    >
                    <Input.Password style={{background: '#2c353d'}}  />
                </Form.Item>
                
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    >
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}