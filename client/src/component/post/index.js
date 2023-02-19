import React from 'react'
import { Avatar, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './post.css'

export const Post = ({title}) => {
    return (
        <div className='post-wrapper'>
            <img alt='' className='post-image' src="https://img.freepik.com/premium-vector/open-folder-folder-with-documents-document-protection-concept_183665-104.jpg?w=2000" />
            <div className='post-description'>
                <p className='text-truncate post-title'>{title}</p>
                <div className='post-tag-list'>
                    <Tag className='tag-list-item' color='#2C353D'>Tag 1</Tag>
                    <Tag className='tag-list-item' color='#2C353D'>Tag 2</Tag>
                    <Tag className='tag-list-item' color='#2C353D'>Tag 3</Tag>
                </div>
                <div className='post-user-section'>
                    <div className='post-user-wrapper'>
                        <Avatar size={38} icon={<UserOutlined />} />
                        <div className='post-user-information'>
                            <h5>UserName</h5>
                            <p>3 weeks ago</p>
                        </div>
                    </div>
                    <div className='post-action-information'>
                        <p>651,000 Views</p>
                        <p>36,6545 Likes</p>
                        <p>651,000 Comment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
