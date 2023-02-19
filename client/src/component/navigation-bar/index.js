import React from 'react'
import {
    HomeOutlined,
    UsergroupAddOutlined,
    AudioOutlined,
    CameraOutlined,
    BellOutlined,
    UserOutlined,
    DownOutlined
} from '@ant-design/icons';
import {
    Input,
    Avatar,
    Dropdown,
    Space
} from 'antd';
import './navigation-bar.css';

export const NavBar = () => {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            ),
            disabled: true,
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            ),
            disabled: true,
        },
        {
            key: '4',
            danger: true,
            label: 'a danger item',
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
                    <HomeOutlined className='active' />
                    <UsergroupAddOutlined />
                    <AudioOutlined />
                    <CameraOutlined />
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
            </div>
        </div>
    )
}
