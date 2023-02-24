import React from 'react'
import {
    UsergroupAddOutlined,
    AudioOutlined,
    BellOutlined,
    UserOutlined,
    DownOutlined,
    ProjectFilled,
    HomeFilled,
} from '@ant-design/icons';
import {
    Input,
    Button,
    Avatar,
    Dropdown,
    Space
} from 'antd';
import { useSelector } from 'react-redux';
import './navigation-bar.css';

export const NavBar = () => {
    const { Search } = Input;
    const userInfo = useSelector((state) => state.user.value);
    const onSearch = (value) => console.log(value);
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    User Profile
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Logout
                </a>
            ),
        },
    ];

    return (
        <div className='navbar-wrapper'>
            <div className='first-navbar-part'>
                <div className='app-logo-wrapper'>
                    <img alt='' className='app-logo' src="https://i.imgur.com/MDzKpLi.png" />
                </div>
                <h3 className='app-title'>University Debate</h3>
            </div>
            <div className='middle-navbar-part'>
                <div className='navigation-btn-grp'>
                    <HomeFilled className='active' />
                    <UsergroupAddOutlined />
                    <AudioOutlined />
                    <ProjectFilled />
                </div>
                <div className='search-engine'>
                    <Search
                        placeholder="Type here to search..."
                        onSearch={onSearch}
                        enterButton
                        size='large' />
                </div>
            </div>
            <div className='last-navbar-part'>
                {userInfo
                    ? (<>
                        <div className='noti-icon'>
                            <BellOutlined />
                        </div>
                        <div className='user-section'>
                            <Avatar shape="square" size={38} icon={<UserOutlined />} />
                            <Dropdown
                                className=''
                                trigger={['click']}
                                menu={{
                                    items,
                                }}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <h4>User Name</h4>
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </>)
                    : <>
                        <Button size='large' className='login-btn' type='primary'>Login</Button>
                        <Button size='large' className='register-btn'>Register</Button>
                    </>}


            </div>
        </div>
    )
}

