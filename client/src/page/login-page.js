import React from "react";
import {Layout, ContentBox, Filter} from "../component";
import axios from "axios";
import { Input, Button, Typography } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined  } from '@ant-design/icons';
const { Title, Text } = Typography;

export const Login = () => {
    return (
        <Layout>
            <div className='layout-panel extend'>
            </div>
            <div className='layout-panel primary'>
                <ContentBox>
                    <div className='login-form'>
                    <Title>Login to your account</Title>
                    <Text>Login using social networks</Text>
                        <Input
                            placeholder="Username..."
                            />
                        <Input.Password
                            placeholder="Password..."
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        <Button type="primary">Sign in</Button>
                        
                    </div>
                </ContentBox>
            </div>
            <div className="layout-panel extend">
            </div>
        </Layout>
        
    )
}