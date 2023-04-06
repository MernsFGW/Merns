import React from 'react';

import { ClockCircleOutlined, TrophyOutlined, ReconciliationOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Row } from 'antd';


export const Dashboard = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Row>
        <Col span={7}>
          <div className='user-avatar'>
              {userInfo
              ? <Avatar size={170} src={`https://ui-avatars.com/api/?name=${userInfo.user.fullName}`} />
              : <Avatar size={170} icon={<UserOutlined />} />
              }
          </div>
        </Col>
        <Col span={15}>
          <Row>
            <div className='user-infomation'>
              <h1>{userInfo.user.fullName}</h1>
              <h3>
              <TeamOutlined />&nbsp;&nbsp;
              {userInfo?.user?.department?.title} department
              </h3>
            </div>
          </Row>
          <br />
          <br />
          <Row>
            <Col span={8}>
              <div style={{display: 'flex'}}>
                <div style={{padding: '3px 10px 0 0'}}>
                  <ClockCircleOutlined style={{fontSize: '30px', color: 'white'}} />
                </div>
                <div>
                  <p><strong>3+ Years Job</strong></p>
                  <p>Experienced</p>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div style={{display: 'flex'}}>
                <div style={{padding: '3px 10px 0 0'}}>
                  <TrophyOutlined style={{fontSize: '30px', color: 'white'}} />
                </div>
                <div>
                  <p><strong>5 Certificates</strong></p>
                  <p>Achieved</p>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div style={{display: 'flex'}}>
                <div style={{padding: '3px 10px 0 0'}} >
                  <ReconciliationOutlined style={{fontSize: '30px', color: 'white'}} />
                </div>
                <div>
                  <p><strong>2 Intership</strong></p>
                  <p>Completed</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
