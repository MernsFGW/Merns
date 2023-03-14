import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadingIdea } from '../../redux/idea';
import { Layout, Post, ContentBox, NavigationAdmin, Profile } from '../../component';
import { List, Tabs } from 'antd';
import { useParams } from 'react-router';
import axios from 'axios';

const { TabPane } = Tabs;

export const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  const ideas = useSelector(state => state.idea.value);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/ideas/user/${id}`)
      .then(res => {
        dispatch(loadingIdea(res.data));
      })
      .catch(err => console.log(err));
    setIsLoading(false);
  }, [id]);


  return (
    <Layout>
      <div className='layout-panel secondary'>
        <NavigationAdmin />
      </div>
      <div className='layout-panel primary'>
        <ContentBox>
          <Profile />
        </ContentBox>
        <div style={{ display: 'block' }}>
          <Tabs>
            <TabPane tab={<h4>Ideas</h4>} key="1">
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
                dataSource={ideas}
                renderItem={(item) => (
                  <List.Item>
                    <ContentBox>
                      <Post item={{ ...item }} />
                    </ContentBox>
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab={<h4>Comments</h4>} key="2">
              2nd TAB PANE Content
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div className='layout-panel extend'>
      </div>
    </Layout>
  );
}