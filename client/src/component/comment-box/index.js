import { Avatar, Button, List, Skeleton, Dropdown, Modal, message } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { CommentForm, EditCommentForm } from '../form';
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
    const [modalOpen, setModalOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [seletedCmt, setSeletedCmt] = useState();
    const [editMode, setEditMode] = useState('');

    const items = [
        {
            label: 'Edit feedback',
            key: 'Edit',
        },
        {
            label: 'Remove feeback',
            key: 'Remove',
        },
    ];

    const onClick = ({ key }) => {
        if (key === 'Remove') {
            setModalOpen(true);
        } else {
            setEditMode(seletedCmt);
        }
    };

    const handleDelete = async (_id) => {
        console.log(_id);
        setConfirmLoading(true);
        await axios.delete(`http://localhost:3000/api/feedbacks/${_id}`)
            .then(res => {
                message.success("Remove feedback success!");
                setData(oldArray => oldArray.filter(item => item._id !== _id));
                setList(oldArray => oldArray.filter(item => item._id !== _id));
                setConfirmLoading(false);
                setModalOpen(false);
            })
            .catch((error) => console.log(error.response.request._response));
    };

    useEffect(() => {
        axios.get(fakeDataUrl)
            .then((res) => {
                setInitLoading(false);
                setData(res.data);
                setList(res.data);
            });
    }, []);

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
            {userInfo ? <CommentForm setList={setList} userInfo={userInfo} ideaId={ideaId} setData={setData} /> : ''}
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item
                    >
                        {editMode !== item._id ? <><Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={item.userId && !item.incognito
                                    ? <Avatar size={40} src={`https://ui-avatars.com/api/?name=${item.userId.fullName}`} />
                                    : <Avatar size={40} icon={<UserOutlined />} />}
                                title={item.userId && !item.incognito ? item.userId.fullName : 'Anonymous'}
                                description={item.content}
                            />
                        </Skeleton>
                            { userInfo && userInfo.user.id === item.userId._id
                                ? <Dropdown
                                    arrow={true}
                                    trigger={['click']}
                                    menu={{
                                        items,
                                        onClick: (key) => { onClick(key) }
                                    }}
                                >
                                    <a onClick={(e) => { e.preventDefault(); setSeletedCmt(item._id) }}>
                                        <h2 className='post-action-dropdown'><EllipsisOutlined style={{ fontSize: 20 }} /></h2>
                                    </a>
                                </Dropdown>
                                : ''}
                        </> : <EditCommentForm setEditMode={setEditMode} setList={setList} userInfo={userInfo} feedback={item} setData={setData} />}
                    </List.Item>
                )}

            />
            <Modal
                title="Delete confirm"
                open={modalOpen}
                onOk={() => { handleDelete(seletedCmt); }}
                confirmLoading={confirmLoading}
                onCancel={() => { setModalOpen(false); setSeletedCmt(undefined) }}
            >
                Do you really want to delete this comment?<br />
                This process cannot be undone.
            </Modal>
        </div>
    );
};