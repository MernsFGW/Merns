import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DashboardOutlined, SettingOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import './navigation-admin.css';

import { Layout, Menu, Space } from 'antd';

const { Sider } = Layout;

export const NavigationAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        className='post-filter-container'
        style={{background: '#1E252B', width: '230px'}}
        // defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <DashboardOutlined />,
            label: (
              <a onClick={() => {navigate(`/users/${userInfo.user.id}`)}} target="_blank" rel="noopener noreferrer">
                Dashboard
              </a>
            ),
            className: 'post-filter-item',
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: (
              <a onClick={() => {navigate(`/users/${userInfo.user.id}/profile`)}} rel="noopener noreferrer">
                Manage Profile
              </a>
            ),
            className: 'post-filter-item',
          },
          {
            key: '3',
            icon: <SettingOutlined />,
            label: (
              <a onClick={() => {navigate(`/users/${userInfo.user.id}/changepassword`)}} rel="noopener noreferrer">
                  Manage Password
              </a>
            ),
            className: 'post-filter-item',
          },
          {
            key: '4',
            icon: <HomeOutlined />,
            label: (
              <a onClick={() => {navigate("/")}} rel="noopener noreferrer">
                  Back to Home
              </a>
            ),
            className: 'post-filter-item',
          },
        ]}
      />
    </Sider>
  )
}