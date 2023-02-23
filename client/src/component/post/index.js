import React from 'react'
import { Avatar, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { formatDistance } from 'date-fns'
import './post.css'

export const Post = ({item}) => {
    console.log(item.photo);
    const updateDate = formatDistance(new Date(item.createdAt), new Date(), { addSuffix: true });
    const upperCaseFirstLetter = (word) => {
        const firstLetter = word.charAt(0);
        const firstLetterCap = firstLetter.toUpperCase()
        const remainingLetters = word.slice(1)
        const capitalizedWord = firstLetterCap + remainingLetters
        return capitalizedWord;
    }

    return (
        <div className='post-wrapper'>
            <img alt='' className='post-image' src="https://img.freepik.com/premium-vector/open-folder-folder-with-documents-document-protection-concept_183665-104.jpg?w=2000" />
            <div className='post-description'>
                <p className='text-truncate post-title'>{item.title}</p>
                <div className='post-tag-list'>
                    <Tag className='tag-list-item' color='var(--sub-contrast-color)'>Schoolar</Tag>
                    <Tag className='tag-list-item' color='var(--sub-contrast-color)'>Violent</Tag>
                    <Tag className='tag-list-item' color='var(--sub-contrast-color)'>Drama</Tag>
                </div>
                <div className='post-user-section'>
                    <div className='post-user-wrapper'>
                        <Avatar size={38} icon={<UserOutlined />} />
                        <div className='post-user-information'>
                            <h5>UserName</h5>
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
