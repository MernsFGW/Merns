import React from "react";
import { ContentBox } from "../component";
import axios from "axios";
import { Input, Button, Typography } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined, CaretLeftOutlined } from '@ant-design/icons';
import './login-page.css';
import { Link } from "react-router-dom";

const { Title, Text } = Typography;
export const Login = () => {
    return (
        <div className="login-page-container">
            <ContentBox>
                <div className='login-form'>
                    <Title>Login to your account</Title>
                    <Text>Login using social networks</Text>
                    <Input
                        className="user-input"
                        placeholder="Username..."
                    />
                    <Input.Password
                        className="password-input"
                        placeholder="Password..."
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <Button type="primary">Sign in</Button>
                </div>
                <div className="login-navigate-section">
                    <Link className="navigation-link" to="/"><CaretLeftOutlined /> Back to Home Page</Link>
                    <Link className="navigation-link" to="#">Register page</Link>
                </div>
            </ContentBox>
        </div>
    )
}