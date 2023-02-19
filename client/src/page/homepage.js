import { Layout, ContentBox, Post, Filter } from '../component';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Input, Button, List } from 'antd';

export const Home = () => {
  const data = Array.from({ length: 50 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  }));
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
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <ContentBox>
                <Post />
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
