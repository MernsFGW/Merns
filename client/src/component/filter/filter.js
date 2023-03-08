import React from 'react';
import { StarFilled, LikeFilled, DislikeFilled } from '@ant-design/icons';
import './filter.css';

export const Filter = ({setQueryParams, removeQueryParams}) => {

  const sortList = [
    {
      type: 'feedback',
      content: 'feedbacked',
      icon: <StarFilled style={{color: 'green'}} className='post-filter-icon' />,
    },
    {
      type: 'like',
      content: 'upvoted',
      icon: <LikeFilled style={{color: '#537FE7'}} className='post-filter-icon' />,
    },
    {
      type: 'dislike',
      content: 'downvoted',
      icon: <DislikeFilled style={{color: '#FF597B'}} className='post-filter-icon' />,
    }
  ]

  return (
    <div className='post-filter-container'>
      {sortList.map(item => (
          <button key={item.type} onClick={() =>{ removeQueryParams('categoryId'); setQueryParams('sort', item.type)}} className='post-filter-item'> 
          {item.icon}
          <div className='filter-desciption'>
            <p className='filter-title'>Most {item.content} post</p>
            <p className='filter-sub-title'>Find the most {item.content} post</p>
          </div>
        </button>
      ))}
    </div>
  )
}
