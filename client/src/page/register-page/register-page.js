import React, { useState, useEffect, useRef} from "react";
import { ContentBox } from "../../component";
import axios from "axios";
import { Input, Button, Typography, Modal, Select} from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined, CaretLeftOutlined, ExclamationCircleOutlined, DownOutlined } from '@ant-design/icons';
import './register-page.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loadingDepartment } from '../../redux/department';
import { useSelector, useDispatch } from 'react-redux';

const { Title, Text } = Typography;
export const Register = () => {
    // const dispatch = useDispatch();
    // const shouldFetch = useRef(true);
    // const departmentList = useSelector(state => state.department.value);
    const [values, setValues] = useState({
        fullName: '',
        username: '',
        password: '',
        departmentId: '',
        status:'',
        error: '',
        openNotification: false,
        redirectToLogin: false
    });

    const [departmentValues, setDepartmentValues] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/departments')
            .then((res) => {
                setDepartmentValues(res.data);
            })
    }, []);

    const options = departmentValues.map(item => {
        return {
            label: item.title,
            value: item._id,
        }
    })

    const navigate = useNavigate();

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    };


    const clickSubmit = async () => {
        const user = {
            fullName: values.fullName || undefined,
            username: values.username || undefined,
            password: values.password || undefined,
            departmentId: values.departmentId || undefined
        }
        await axios.post("http://localhost:3000/api/users/new", user,
        {
            headers: {
                    'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res.data);
            // localStorage.setItem("user", JSON.stringify(res.data));
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
        setValues({...values, openNotification: false, redirectToLogin: true})
    };
    
    const handleCancel = () => {
        setValues({...values, openNotification: false, redirectToLogin: true})
    };

    if (values.redirectToLogin) {
      return navigate("/login");
    }
    return (
        <div className="register-page-container">
            <ContentBox>
                <form className='register-form'>
                    <Title>Register new account</Title>
                    <Text>Register using social networks</Text>
                    <Input
                        type="fullName"
                        label="fullName"
                        className="user-input"
                        placeholder="Full name..."
                        value={values.fullName}
                        onChange={handleChange('fullName')}
                    />
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
                    <Select
                        showSearch
                        placeholder="Select a department"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.label.toLowerCase().includes(input.toLowerCase())
                        }
                        options={options}
                        fieldNames={{label: "department", value: values.departmentId}}
                        onChange={handleChange('departmentId')}
                    />
                    {
                        values.error && (<Typography component="p">
                            <ExclamationCircleOutlined className="error"/>  {values.error}
                        </Typography>)
                    }
                    <Button type="primary" onClick={clickSubmit}>Sign up</Button>
                </form>
                <Modal open={values.openNotification} onOk={handleOk} onCancel={handleCancel}>
                    {values.status}!! Click OK or Cancel to go to login page
                </Modal>
                <div className="register-navigate-section">
                    <Link className="navigation-link" to="/"><CaretLeftOutlined /> Back to Home Page</Link>
                    <Link className="navigation-link" to="/login">Login page</Link>
                </div>
            </ContentBox>
        </div>
    )
}