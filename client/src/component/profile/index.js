import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Col, Row, Input, Space, Avatar, Upload, Button, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const Profile = () => {
    const params =  useParams();
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [departmentId, setDepartment] = useState('')
    const [departmentList, setDepartmentList] = useState([]);
    const userInfo = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        axios.get('http://localhost:3000/api/departments')
            .then(res => setDepartmentList(res.data));
    }, [])

    const options = departmentList.map(item => {
        return {
            label: item.title,
            value: item._id,
        }
    })

    useEffect(() => {
        getUserInfo()
    }, [])

    const getUserInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/users/${params.id}`, {
                headers: {
                    Authorization: userInfo.token,
                },
            });
            const result = response.data;
            setUsername(result.username);
            setFullName(result.fullName);
            setDepartment(result.departmentId)
        } catch (error) {
            console.error(error);
        }
    }

    const updateProfile = async () => {
        try {
            const result = await axios.put(`http://localhost:3000/api/users/${params.id}`, { username, fullName, departmentId });
            console.log(result.data);
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <>
            <Row>
                <Col span={24}><h1>My Profile</h1></Col>
                <Col span={24}><p>Manage and protect your account</p></Col>
            </Row>
            <div style={{borderBottom: 'solid white 1px'}}>
                <br />
            </div>
            <br />
            <br />
            <Row>
                <Col span={16} style={{borderRight: 'solid white 1px'}}>
                    <Row>
                        <Col span={6}><h5>Username</h5></Col>                        
                        <Col span={14}>
                            <Input type='text' placeholder={userInfo.user.username} value={username} onChange={(e) => { setUsername(e.target.value)}}  />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col span={6}><h5>FullName</h5></Col>                        
                        <Col span={14}>
                            <Input type='text' placeholder={userInfo.user.fullName} value={fullName} onChange={(e) => { setFullName(e.target.value)}}  />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col span={6}><h5>Email</h5></Col>
                        <Col span={14}>
                            <Space>
                                <h5>dmthlinh@gmail.com</h5>
                            </Space>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col span={6}><h5>Department</h5></Col>
                        <Col span={14}>
                            <Select
                                showSearch
                                placeholder={userInfo.user.department.title}
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.label.toLowerCase().includes(input.toLowerCase())
                                }
                                options={options}
                                onChange={value => setDepartment(value)}
                                style={{width: '100px'}}
                            />
                        </Col>
                    </Row>                
                </Col>
                <Col span={8}>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        {userInfo
                        ? <Avatar size={120} src={`https://ui-avatars.com/api/?name=${userInfo.user.fullName}`} />
                        : <Avatar size={120} icon={<UserOutlined />} />
                        }
                    </div>
                    <br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Upload>
                            <Button type='primary' >Select Image</Button>
                        </Upload>
                    </div>
                </Col>
            </Row>
            <br />
            <Row>
                <Col span={16}>
                    <Row>
                        <Col span={6}></Col>
                        <Col span={14}>
                            <Button type='primary' onClick={updateProfile} >Save</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>    
    )
}
