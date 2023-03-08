import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from "react-router-dom";
import { Layout, ContentBox, Post, Modal, CreateIdeaForm, FilterPanel, MyChart } from '../../component';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Input, Button, List } from 'antd';
import { loadingIdea } from '../../redux/idea';
import { useSelector, useDispatch } from 'react-redux';


export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [termList, setTermList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const shouldFetch = useRef(true);
  const ideaList = useSelector(state => state.idea.value);

  const getParam = (searchParam) => {
    const getSearchParam = searchParams.get(searchParam);
    if (getSearchParam) {
      return `${searchParam}=${getSearchParam}`;
    }
    return getSearchParam;
  }

  const [key] = searchParams.entries();
  
  useEffect(() => {
    if (userInfo) {
      axios.get('http://localhost:3000/api/terms')
        .then(res => setTermList(res.data));
    }
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/api/categories')
      .then(res => setCategoryList(res.data));
  }, [])

  useEffect(() => {
    if (getParam('categoryId')){
      axios.get(`http://localhost:3000/api/ideas/filter?${getParam('categoryId')}`)
      .then(res => { dispatch(loadingIdea(res.data));})
    } else if (getParam('sort')) {
   
      axios.get(`http://localhost:3000/api/ideas/sort?${getParam('sort')}`)
        .then(res => { dispatch(loadingIdea(res.data)) })
    } else{
      axios.get('http://localhost:3000/api/ideas')
        .then(res => { dispatch(loadingIdea(res.data)) })
        .catch(error => console.log(error));
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ideaList.length, getParam('sort'), getParam('categoryId'), typeof key ]);
  

  return (
    <Layout>
      <div className='layout-panel extend'>
        <FilterPanel categoryList={categoryList} />
      </div>
      <div className='layout-panel primary'>
        <ContentBox>
          <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
            <CreateIdeaForm handleClose={() => { setIsOpen(false); setIsLoading(true) }} categoryList={categoryList} termList={termList} />
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
         <MyChart />
      </div>
    </Layout>
  );
}

