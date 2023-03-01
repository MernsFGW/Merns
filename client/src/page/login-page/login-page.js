import React, { useState, useEffect} from "react";
import { ContentBox } from "../../component";
import axios from "axios";
import { Input, Button, Typography, Modal } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined, CaretLeftOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './login-page.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadingUser } from '../../redux/user';
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
export const Login = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        status:'',
        error: '',
        openNotification: false,
        redirectToHome: false
    });
    const navigate = useNavigate()

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    };


    const clickSubmit = async () => {
        const user = {
            username: values.username || undefined,
            password: values.password || undefined
        }
        await axios.post("http://localhost:3000/api/login", user,
        {
            headers: {
                    'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            setValues({...values, status:res.data.message, error: '', openNotification: true})
        }).catch(function (error) {
            if (error.response) {
              // Request made and server responded
              setValues({...values, error: error.response.data.error})
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
        }
        )
    };
    const handleOk = () => {
        setValues({...values, openNotification: false, redirectToHome: true})
    };
    
    const handleCancel = () => {
        setValues({...values, openNotification: false, redirectToHome: true})
    };

    if (values.redirectToHome) {
      return navigate("/");
    }
    return (
        <div className="login-page-container">
            <ContentBox>
                <form className='login-form'>
                    <Title>Login to your account</Title>
                    <Text>Login using social networks</Text>
                    <Input
                        type="username"
                        label="Username"
                        className="user-input"
                        placeholder="Username..."
                        value={values.username}
                        onChange={handleChange('username')}
                    />
                    <Input.Password
                        type="password"
                        label="Password"
                        className="password-input"
                        placeholder="Password..."
                        value={values.password}
                        onChange={handleChange('password')}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    {
                        values.error && (<Typography component="p">
                            <ExclamationCircleOutlined className="error"/>  {values.error}
                        </Typography>)
                    }
                    <Button type="primary" onClick={clickSubmit}>Sign in</Button>
                </form>
                <Modal title="Basic Modal" open={values.openNotification} onOk={handleOk} onCancel={handleCancel}>
                    <p>{values.status}</p>
                </Modal>
                <div className="login-navigate-section">
                    <Link className="navigation-link" to="/"><CaretLeftOutlined /> Back to Home Page</Link>
                    <Link className="navigation-link" to="/register">Register page</Link>
                </div>
            </ContentBox>
        </div>
    )
}