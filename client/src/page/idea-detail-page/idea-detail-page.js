import React from 'react';
import { Layout, ContentBox } from '../../component';
import { Tag, Avatar, Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { CommentBox } from '../../component';
import './idea-detail-page.css';

export const IdeaDetail = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <Layout>
            <div className='layout-panel extend'></div>
            <div className='layout-panel primary'>
                <ContentBox>
                    <div className='post-detail-wrapper'>
                        <div className='image-container'>
                            <img className='post-detail-image' src='https://www.toponseek.com/blogs/wp-content/uploads/2022/06/viet-blog-3.jpg' />
                        </div>
                        <div className='social-info-wrapper'>
                            <div className='post-tag-list'>
                                <Tag className='tag-list-item post-detailt-text' color='var(--sub-contrast-color)'>Schoolar</Tag>
                            </div>
                            <div className='post-action-information'>
                                <p className='post-detailt-text'>Jan 1, 2021</p>
                                <p className='post-detailt-text'>-</p>
                                <p className='post-detailt-text'>651,000 View</p>
                                <p className='post-detailt-text'>-</p>
                                <p className='post-detailt-text'>53,000 Like</p>
                            </div>
                        </div>
                        <h1 className='post-detail-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                        <div className='detail-page-user'>
                            <Avatar shape='square' size={40} icon={<UserOutlined />} />
                            <p>by UserName</p>
                        </div>
                        <p className='detail-page-content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque hendrerit nulla quis accumsan. Phasellus accumsan viverra arcu, at dapibus augue volutpat sit amet. Vestibulum bibendum dolor vel enim pharetra accumsan. Pellentesque finibus, velit sit amet pellentesque tempor, sem lorem tincidunt arcu, non finibus felis ante id nibh. Cras id lorem ut ligula mattis consequat sed lacinia diam. Nullam molestie mauris sit amet ex vehicula, at cursus enim tristique. Suspendisse a diam semper, dignissim lorem at, scelerisque ipsum. Vivamus consequat tortor nisi, ut tempor nisl tincidunt sit amet.
                        </p>
                    </div>
                </ContentBox>
                <ContentBox>
                    <div className='comment-section'>
                        <h3>Feedbacks</h3>
                        <Form
                            className='create-comment-form'
                            onFinish={onFinish}
                            style={{ width: '100%', gap: 20 }}
                            layout='inline'
                        >
                            <Form.Item
                                colon={false}
                                label={<Avatar size={40} icon={<UserOutlined />} />}
                                name="comment"
                                style={{ flex: '2' }}
                            >
                                <Input size='large' placeholder='Leave your comment here...' />
                            </Form.Item>
                            <Form.Item>
                                <Button size='large' type="primary" htmlType="submit">
                                    Comment
                                </Button>
                            </Form.Item>
                        </Form>
                        <CommentBox></CommentBox>
                    </div>
                </ContentBox>
            </div>
            <div className='layout-panel extend'></div>
        </Layout>
    )
}
