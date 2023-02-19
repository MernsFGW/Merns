import React from 'react';
import { MonitorOutlined, StarFilled, LikeFilled, EyeFilled } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import './filter.css';

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setQueryParams = () => {
    setSearchParams({ keyword: 'sdasd' });
  }

  const removeQueryParams = () => {
    const param = searchParams.get('keyword');
    if (param) {
      searchParams.delete('keyword');
      setSearchParams(searchParams);
    }
  };

  return (
    <div className='post-filter-container'>
        <button className='post-filter-item'> 
          <StarFilled style={{color: 'green'}} className='post-filter-icon' />
          <div className='filter-desciption'>
            <p className='filter-title'>Newest and Recent</p>
            <p className='filter-sub-title'>Find the latest update</p>
          </div>
        </button>
        <button className='post-filter-item active'> 
          <EyeFilled style={{color: 'yellow'}} className='post-filter-icon' />
          <div className='filter-desciption'>
            <p className='filter-title'>Most viewed Post</p>
            <p className='filter-sub-title'>Top 10 viewed post</p>
          </div>
        </button>
        <button className='post-filter-item'> 
          <LikeFilled style={{color: '#3366FF'}} className='post-filter-icon' />
          <div className='filter-desciption'>
            <p className='filter-title'>Most liked post</p>
            <p className='filter-sub-title'>Top 10 liked post</p>
          </div>
        </button>
    </div>
  )
}
