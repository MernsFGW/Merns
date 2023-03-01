import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Layout, ContentBox, Post, Filter, Modal, CreateIdeaForm } from '../../component';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Input, Button, List } from 'antd';
import { loadingIdea } from '../../redux/idea';
import { useSelector, useDispatch } from 'react-redux';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shouldFetch = useRef(true);
  const ideaList = useSelector(state => state.idea.value);

  useEffect(() => {
    if(shouldFetch.current){
      shouldFetch.current = false;
      axios.get('http://localhost:3000/api/ideas')
        .then(res => { dispatch(loadingIdea(res.data))})
        .catch(error => console.log(error));
    }
    setIsLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ideaList.length]);

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
            <CreateIdeaForm handleClose={() => {setIsOpen(false); setIsLoading(true)}} />
          </Modal>
          <div className='update-post'>
            {userInfo 
              ? <Avatar size={38} src={`https://ui-avatars.com/api/?name=${userInfo.user.fullName}`} />
              : <Avatar size={38} icon={<UserOutlined />} />
            }
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

