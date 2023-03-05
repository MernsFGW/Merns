import React, {useState} from 'react';
import { StarFilled, LikeFilled, DislikeFilled } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import './filter.css';

export const Filter = () => {
  const [active, setActive] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const setQueryParams = (searchParam, searchParamValue) => {
    removeQueryParams(searchParam);
    setSearchParams(prev => ([...prev.entries(), [searchParam, searchParamValue]]));
  }

  const removeQueryParams = (searchParam) => {
    const param = searchParams.get(searchParam);
    if (param) {
      searchParams.delete(searchParam);
      setSearchParams(searchParams);
    }
  };

  return (
    <div className='post-filter-container'>
        <button onClick={() =>{ removeQueryParams('categoryId'); setQueryParams('sort', 'feedback')}} className='post-filter-item active'> 
          <StarFilled style={{color: 'green'}} className='post-filter-icon' />
          <div className='filter-desciption'>
            <p className='filter-title'>Most feedbacked post</p>
            <p className='filter-sub-title'>Find the most feedbackes post</p>
          </div>
        </button>
         <button onClick={() =>{ removeQueryParams('categoryId'); setQueryParams('sort', 'like')}} className='post-filter-item'> 
          <LikeFilled style={{color: '#537FE7'}} className='post-filter-icon' />
          <div className='filter-desciption'>
            <p className='filter-title'>Most upvoted post</p>
            <p className='filter-sub-title'>Find the most upvoted post</p>
          </div>
        </button>
        <button onClick={() =>{ removeQueryParams('categoryId'); setQueryParams('sort', 'dislike')}} className='post-filter-item '> 
          <DislikeFilled style={{color: '#FF597B'}} className='post-filter-icon' />
          <div className='filter-desciption'>
            <p className='filter-title'>Most downvoted Post</p>
            <p className='filter-sub-title'>Find the most downvoted post</p>
          </div>
        </button>
       
    </div>
  )
}
