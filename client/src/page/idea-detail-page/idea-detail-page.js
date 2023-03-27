/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Layout, ContentBox } from '../../component';
import { Loading } from '../loading-page/loading-page'
import { Tag, Avatar, Dropdown, Modal as AntModal, message } from 'antd';
import { LikeFilled, DislikeFilled, UserOutlined, EllipsisOutlined } from '@ant-design/icons';
import { CommentBox, Modal, UpdateIdeaForm } from '../../component';
import { useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { removeIdea } from '../../redux/idea';
import { useDispatch } from 'react-redux';
import { checkTerm } from '../../component';
import axios from 'axios';
import './idea-detail-page.css';

export const IdeaDetail = () => {
    let { id } = useParams();
    const [data, setData] = useState({});
    const [like, setLike] = useState([]);
    const [dislike, setDislike] = useState([]);
    const [loading, setLoading] = useState(true);
    const [feedbackCount, setFeedbackCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [termList, setTermList] = useState([]);
    const [feedbackAble, setFeedbackAble] = useState('');
    const userInfo = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const defaultImage = 'https://res.cloudinary.com/dvxfixf5q/image/upload/v1679888541/Photo/ylu8rb9clvpu4fipanqy_xnjwjd.jpg';

    const onClick = ({ key }) => {
        key === "Edit" ? setIsOpen(true) : setModalOpen(true);
    };
    const items = [
        {
            label: 'Edit idea',
            key: 'Edit',
        },
        {
            label: 'Remove idea',
            key: 'Remove',
        },
    ];

    const handleDelete = async () => {
        setConfirmLoading(true);
        await axios.delete(`http://localhost:3000/api/ideas/${id}`)
            .then(res => { dispatch(removeIdea(res.data)); message.success(res.data.message); setConfirmLoading(false); })
            .catch((error) => console.log(error));
        navigate("/");
    };

    const likeIdea = async () => {
        if (checkLiked()) {
            await axios.patch(`http://localhost:3000/api/ideas/${userInfo.user.id}/unlike/${data._id}`)
                .then(res => setLike(res.data.likes));
        } else {
            await axios.patch(`http://localhost:3000/api/ideas/${userInfo.user.id}/undislike/${data._id}`)
                .then(res => setDislike(res.data.dislikes));
            await axios.patch(`http://localhost:3000/api/ideas/${userInfo.user.id}/like/${data._id}`)
                .then(res => setLike(res.data.likes));
        }
    };

    const dislikeIdea = async () => {
        if (checkDisliked()) {
            await axios.patch(`http://localhost:3000/api/ideas/${userInfo.user.id}/undislike/${data._id}`)
                .then(res => setDislike(res.data.dislikes));
        } else {
            await axios.patch(`http://localhost:3000/api/ideas/${userInfo.user.id}/unlike/${data._id}`)
                .then(res => setLike(res.data.likes));
            await axios.patch(`http://localhost:3000/api/ideas/${userInfo.user.id}/dislike/${data._id}`)
                .then(res => setDislike(res.data.dislikes));
        }
    };

    const checkLiked = () => {
        if (userInfo) {
            const isLike = like.find(like => like === userInfo.user.id);
            return isLike;
        }
        return undefined;
    };

    const checkDisliked = () => {
        if (userInfo) {
            const isDislike = dislike.find(dislike => dislike === userInfo.user.id);
            return isDislike;
        }
        return undefined;
    };

    const checkFeedbackAble = (data) => {
        if (data) {
            return checkTerm(data.termId, termList)[1];
        }
        return "";
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/api/feedbacks?ideaId=${id}`)
            .then(res => {
                setFeedbackCount(res.data.length);
                console.log(feedbackCount);
            })
    })

    useEffect(() => {
        axios.get(`http://localhost:3000/api/ideas/${id}`)
            .then(res => {
                setData(res.data.idea);
                setLoading(false);
                setLike(res.data.idea.likes.map(like => {
                    return like._id;
                }))
                setDislike(res.data.idea.dislikes.map(dislike => {
                    return dislike._id;
                }))
                setFeedbackAble(checkFeedbackAble(res.data.idea));
            });
    }, [loading])

    useEffect(() => {
        axios.get("http://localhost:3000/api/terms")
            .then((res) => setTermList(res.data));
    }, []);

    if (loading) return <Loading />;

    return (
        <Layout>
            <div className='layout-panel extend'></div>
            <div className='layout-panel primary'>
                <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                    <UpdateIdeaForm initialIdea={data} setData={setData} handleClose={() => { setIsOpen(false); setLoading(true) }} />
                </Modal>
                <AntModal
                    title="Delete confirm"
                    open={modalOpen}
                    onOk={handleDelete}
                    confirmLoading={confirmLoading}
                    onCancel={() => setModalOpen(false)}
                >
                    Do you really want to delete this idea?<br />
                    This process cannot be undone.
                </AntModal>
                <ContentBox>
                    <div className='post-detail-wrapper'>
                        <div className='image-container'>
                            <img alt='' className='post-detail-image' src={data.photo ? data.photo.url : defaultImage} />
                        </div>
                        <div className='social-info-wrapper'>
                            <div className='post-tag-list'>
                                <Tag className='tag-list-item post-detailt-text' color='var(--sub-contrast-color)'>{data.categoryId.title}</Tag>
                                <Tag className='tag-list-item post-detailt-text' color='var(--sub-contrast-color)'>{feedbackAble}</Tag>
                            </div>
                            <div className='post-action-information detail-page-action'>
                                <p className='post-detailt-text'>{format(new Date(data.createdAt), "MMM dd, yyyy")}</p>
                                <p className='post-detailt-text'>-</p>
                                <p className='post-detailt-text'>{feedbackCount} Feedbacks</p>
                                <p className='post-detailt-text'>{like.length} <LikeFilled onClick={userInfo ? likeIdea : () => navigate("/login")} style={{ color: checkLiked() && '#537FE7' }} className='like-btn' /></p>
                                <p className='post-detailt-text'>{dislike.length} <DislikeFilled onClick={userInfo ? dislikeIdea : () => navigate("/login")} style={{ color: checkDisliked() && '#FF597B' }} className='dislike-btn' /></p>
                            </div>
                        </div>
                        <h1 className='post-detail-title'>{data.title}</h1>
                        <div className='detail-page-user-action'>
                            <div className='detail-page-user'>
                                {data.incognito
                                    ? <>
                                        <Avatar shape='square' size={40} icon={<UserOutlined />} />
                                        <p>by Anonymous</p>
                                    </>
                                    : <>
                                        <Avatar shape='square' size={40} src={`https://ui-avatars.com/api/?name=${data.userId.fullName}`} />
                                        <p>by {data.userId.fullName}</p>
                                    </>
                                }
                            </div>
                            {(userInfo && (data.userId._id === userInfo.user.id || userInfo.user.role.title === "Admin")) &&
                                <Dropdown
                                    arrow={true}
                                    trigger={['click']}
                                    menu={{
                                        items,
                                        onClick,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <h2 className='post-action-dropdown'><EllipsisOutlined /></h2>
                                    </a>
                                </Dropdown>
                            }
                        </div>
                        <p className='detail-page-content'>
                            {data.content}
                        </p>
                    </div>
                </ContentBox>
                <ContentBox>
                    <CommentBox setFeedbackCount={setFeedbackCount} feedbackAble={feedbackAble} ideaId={id} userInfo={userInfo} />
                </ContentBox>
            </div>
            <div className='layout-panel extend'></div>
        </Layout>
    )
}
