import React, {useEffect, useState} from 'react'
import { Avatar, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { formatDistance } from 'date-fns'
import { useNavigate } from 'react-router-dom';
import './post.css'

export const Post = ({item}) => {
    const updateDate = formatDistance(new Date(item.createdAt), new Date(), { addSuffix: true });
    const navigate = useNavigate();
    const upperCaseFirstLetter = (word) => {
        const firstLetter = word.charAt(0);
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = word.slice(1)
        const capitalizedWord = firstLetterCap + remainingLetters
        return capitalizedWord;
    }

    return (
        <div onClick={() => navigate(`/ideas/${item._id}`)} className='post-wrapper'>
            <img alt='' className='post-image' src={item.photo.url} />
            <div className='post-description'>
                <p className='text-truncate post-title'>{item.title}</p>
                <div className='post-tag-list'>
                    <Tag className='tag-list-item' color='var(--sub-contrast-color)'>{item.categoryId.title}</Tag>
                </div>
                <div className='post-user-section'>
                    <div className='post-user-wrapper'>
                        <Avatar size={38} src={`https://ui-avatars.com/api/?name=${item.userId.fullName}`}/>
                        <div className='post-user-information'>
                            <h5>{item.userId.fullName}</h5>
                            <p>{upperCaseFirstLetter(updateDate)}</p>
                        </div>
                    </div>
                    <div className='post-action-information'>
                        <p>651,000 View</p>
                        <p>{item.likes.length} Like</p>
                        <p>651,000 Comment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
