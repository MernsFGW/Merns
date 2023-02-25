import React, { useEffect, useState } from 'react';
import { Layout, ContentBox } from '../../component';
import { Tag, Avatar, Form, Input, Button, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { CommentBox } from '../../component';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns'
import './idea-detail-page.css';

export const IdeaDetail = () => {

    let { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const userInfo = JSON.parse(localStorage.getItem("user"));

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/api/ideas/${id}`)
            .then(res => {setData(res.data); setLoading(false); })
    }, [loading])

    if(loading) return <Spin />

    return (
        <Layout>
            <div className='layout-panel extend'></div>
            <div className='layout-panel primary'>
                <ContentBox>
                    <div className='post-detail-wrapper'>
                        <div className='image-container'>
                            <img className='post-detail-image' src={data.idea.photo.url} />
                        </div>
                        <div className='social-info-wrapper'>
                            <div className='post-tag-list'>
                                <Tag className='tag-list-item post-detailt-text' color='var(--sub-contrast-color)'>{data.idea.category}</Tag>
                            </div>
                            <div className='post-action-information'>
                                <p className='post-detailt-text'>{format(new Date(data.idea.createdAt), "MMM dd, yyyy")}</p>
                                <p className='post-detailt-text'>-</p>
                                <p className='post-detailt-text'>651,000 View</p>
                                <p className='post-detailt-text'>-</p>
                                <p className='post-detailt-text'>53,000 Like</p>
                            </div>
                        </div>
                        <h1 className='post-detail-title'>{data.idea.title}</h1>
                        <div className='detail-page-user'>
                            <Avatar shape='square' size={40} icon={<UserOutlined />} />
                            <p>by {data.user.fullName}</p>
                        </div>
                        <p className='detail-page-content'>
                            {data.idea.content}
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
                                label={<Avatar size={40} src={`https://ui-avatars.com/api/?name=${userInfo.user.fullName}`} />}
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
