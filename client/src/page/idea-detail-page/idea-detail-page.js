import React from 'react';
import { Layout, ContentBox } from '../../component';
import { Tag } from 'antd';
import './idea-detail-page.css';

export const IdeaDetail = () => {

    return (
        <Layout>
            <div className='layout-panel extend'></div>
            <div className='layout-panel primary'>
                <ContentBox>
                    <div className='post-detail-wrapper'>
                        <div className='image-container'>
                            <img className='post-detail-image' src='https://www.toponseek.com/blogs/wp-content/uploads/2022/06/viet-blog-3.jpg' />
                        </div>
                        <div className='post-detail-container'>
                            <div className='social-info-wrapper'>
                                <div className='post-tag-list'>
                                    <Tag className='tag-list-item post-detailt-text' color='var(--sub-contrast-color)'>Schoolar</Tag>
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
                            <h1>Post sdadasdasdasdasdasdasdaadsd</h1>
                        </div>
                    </div>
                </ContentBox>
            </div>
            <div className='layout-panel extend'></div>
        </Layout>
    )
}
