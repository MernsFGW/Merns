import React, {useEffect, useState} from 'react'
import { Avatar, Tag } from 'antd';
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

    const checkTerm = (termId) => {
        if(termId === '63fefa350cc2a320980338b3') {
            return "Spring Term";
        } else if(termId === '63fefa5b0cc2a320980338b5'){
            return "Summer Term";
        } else if(termId === '63fefa740cc2a320980338b7'){
            return "Fall Term";
        }else {
            return "Winter Term";
        }
    }

    return (
        <div className='post-wrapper'>
            <img onClick={() => navigate(`/ideas/${item._id}`)} alt='' className='post-image' src={item.photo.url} />
            <div className='post-description'>
                <p onClick={() => navigate(`/ideas/${item._id}`)} className='text-truncate post-title'>{item.title}</p>
                <div className='post-tag-list'>
                    <Tag className='tag-list-item' color='var(--sub-contrast-color)'>{item.categoryId.title}</Tag>
                    <Tag className='tag-list-item' color='var(--sub-contrast-color)'>{checkTerm(item.termId)}</Tag>
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
                        <p>{item.likes.length} Upvote</p>
                        <p>{item.dislikes.length} Downvote</p>
                        <p>651,000 Comment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
