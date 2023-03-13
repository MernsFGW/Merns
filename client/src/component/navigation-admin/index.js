import React, { useState } from 'react';

import { DashboardOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import './navigation-admin.css';

import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export const NavigationAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        className='post-filter-container'
        style={{background: '#1E252B'}}
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
            className: 'post-filter-item',
          },
          {
            key: '2',
            icon: <SettingOutlined />,
            label: 'Setting',
            className: 'post-filter-item',
          },
          {
            key: '3',
            icon: <UserOutlined />,
            label: 'Profile',
            className: 'post-filter-item',
          },
        ]}
      />
    </Sider>
  )
}
