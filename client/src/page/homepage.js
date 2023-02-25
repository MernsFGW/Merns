import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Layout, ContentBox, Post, Filter, Modal, CreateIdeaForm } from '../component';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Input, Button, List } from 'antd';
import { useSelector } from 'react-redux';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ideaList, setIdeaList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = useSelector(state => state.user.value );
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/ideas')
      .then(res => { setIdeaList(res.data); setIsLoading(false); });
  }, [isLoading]);

  return (
    <Layout>
      <div className='layout-panel extend'>
        <ContentBox>
          <Filter />
        </ContentBox>
      </div>
      <div className='layout-panel primary'>
        <ContentBox>
          <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
            <CreateIdeaForm handleClose={() => {setIsOpen(false); setIsLoading(true)}} setIdeaList={setIdeaList} />
          </Modal>
          <div className='update-post'>
            <Avatar size={38} icon={<UserOutlined />} />
            <Input
              disabled
              style={{ borderColor: 'var(--sub-contrast-color)', backgroundColor: 'var(--sub-contrast-color)' }}
              size='large' placeholder="Let's share what going on your mind..." />
            <Button onClick={userInfo ? (() => setIsOpen(true)) : (() => navigate("/login"))} type="primary">Create Post</Button>
          </div>
        </ContentBox>
        <List
          loading={isLoading}
          className='post-list'
          itemLayout="vertical"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 5,
            align: 'center',
            className: 'post-list-pagination'
          }}
          dataSource={ideaList}
          renderItem={(item) => (
            <List.Item>
              <ContentBox>
                <Post item={{ ...item }} />
              </ContentBox>
            </List.Item>
          )}
        />

      </div>
      <div className='layout-panel secondary'>
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </div>
    </Layout>
  );
}
