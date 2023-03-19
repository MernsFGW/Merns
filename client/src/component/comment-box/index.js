import { Avatar, Button, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { CommentForm } from '../form';
import axios from 'axios';
import './comment-box.css';
export const CommentBox = ({ userInfo, ideaId }) => {
    const count = 3;
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(3);
    const fakeDataUrl = `http://localhost:3000/api/feedbacks?start=${start}&end=${end}&ideaId=${ideaId}`;
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get(fakeDataUrl)
            .then((res) => {
                setInitLoading(false);
                setData(res.data);
                setList(res.data);
            });
    }, [list]);

    useEffect(() => {
        const fetchMoreData = () => {
            const newUrl = `http://localhost:3000/api/feedbacks?start=${start}&end=${end}&ideaId=${ideaId}`;
            setLoading(true);
            axios.get(newUrl).then((res) => {
                const newData = data.concat(res.data);
                setData(newData);
                setList(newData);
                setLoading(false);
                window.dispatchEvent(new Event('resize'));
            });
        };

        fetchMoreData();
    }, [start, end]);


    const setNewUrl = () => {
        setStart(old => old + count);
        setEnd(old => old + count);
    };

    const onLoadMore = () => {
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                })),
            ),
        );
        setNewUrl();
    };

    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button type='primary' onClick={onLoadMore}>Show More</Button>
            </div>
        ) : null;
    return (
        <div className='comment-section'>
            <h3>Feedbacks</h3>
            {userInfo ? <CommentForm setList={setList} userInfo={userInfo} ideaId={ideaId} /> : ''}
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={item.userId && !item.incognito
                                    ? <Avatar size={40} src={`https://ui-avatars.com/api/?name=${item.userId.fullName}`} />
                                    : <Avatar size={40} icon={<UserOutlined />} />}
                                title={item.userId && !item.incognito ? item.userId.fullName : 'Anonymous'}
                                description={item.content}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>

    );
};