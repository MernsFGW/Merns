import React from 'react'
import { Avatar, Tag } from 'antd';
import { formatDistance } from 'date-fns'
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import './post.css'

export const checkTerm = (termId, termList) => {
    if (typeof termList !== "undefined" && termList.length > 0) {
        const currentTerm = termList.find(term => term._id === termId);
        const currentDate = new Date();
        if (new Date(currentTerm.startDate) <= currentDate && currentDate < new Date(currentTerm.endDate)) {
            return [currentTerm.title, "Feedback open"];
        }
        return [currentTerm.title, "Feedback close"];
    }
    return ["Unknown", "Unknown"]
}

export const Post = ({ item, termList }) => {
    const updateDate = formatDistance(new Date(item.createdAt), new Date(), { addSuffix: true });
    const navigate = useNavigate();
    const upperCaseFirstLetter = (word) => {
        const firstLetter = word.charAt(0);
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = word.slice(1)
        const capitalizedWord = firstLetterCap + remainingLetters
        return capitalizedWord;
    }

    const defaultImage = 'https://res.cloudinary.com/dvxfixf5q/image/upload/v1679409069/Photo/hfszuemdpzjrc8bupmgd.jpg';

    return (
        <div className='post-wrapper'>
            <img onClick={() => navigate(`/ideas/${item._id}`)} alt='' className='post-image' src={item.photo ? item.photo.url : defaultImage} />
            <div className='post-description'>
                <p onClick={() => navigate(`/ideas/${item._id}`)} className='text-truncate post-title'>{item.title}</p>
                <div className='post-tag-list'>
                    <Tag className='tag-list-item' color='var(--sub-contrast-color)'>{item.categoryId.title}</Tag>
                    <Tag className='tag-list-item' color='var(--sub-contrast-color)'>{checkTerm(item.termId, termList)[0]}</Tag>
                    <Tag className='tag-list-item' color='var(--sub-contrast-color)'>{checkTerm(item.termId, termList)[1]}</Tag>
                </div>
                <div className='post-user-section'>
                    <div className='post-user-wrapper'>
                        {item.incognito
                            ? <Avatar size={38} icon={<UserOutlined />} />
                            : <Avatar size={38} src={`https://ui-avatars.com/api/?name=${item.user.fullName}` } />
                        }
                        <div className='post-user-information'>
                            {item.incognito ? <h5>Anonymous</h5> : <h5>{item.user.fullName}</h5>}
                            <p>{upperCaseFirstLetter(updateDate)}</p>
                        </div>
                    </div>
                    <div className='post-action-information'>
                        <p>{item.likes.length} Upvote</p>
                        <p>{item.dislikes.length} Downvote</p>
                        <p>{item.feedbackCount} Feedback</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
