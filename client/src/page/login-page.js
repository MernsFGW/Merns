import React from "react";
import {ContentBox} from "../component";
import axios from "axios";
import { Input, Button, Typography } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons';
import './login-page.css';

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
            </ContentBox>
        </div>
    )
}