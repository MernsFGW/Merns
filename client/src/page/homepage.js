import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout, ContentBox, Post, Filter } from '../component';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Input, Button, List } from 'antd';

export const Home = () => {

  const [ideaList, setIdeaList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/ideas')
      .then(res => { setIdeaList(res.data); setIsLoading(false); });
  }, []);

  console.log(ideaList);

  return (
    <Layout>
      <div className='layout-panel extend'>
        <ContentBox>
          <Filter />
        </ContentBox>
        <ContentBox></ContentBox>
        <ContentBox></ContentBox>
      </div>
      <div className='layout-panel primary'>
        <ContentBox>
          <div className='update-post'>
            <Avatar size={38} icon={<UserOutlined />} />
            <Input
              disabled
              style={{ borderColor: '#2C353D', backgroundColor: '#2C353D' }}
              size='large' placeholder="Let's share what going on your mind..." />
            <Button type="primary">Create Post</Button>
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
                <Post title={item.content} />
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

export default Home;
