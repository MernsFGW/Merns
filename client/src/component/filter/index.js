import React, {useState} from 'react';
import { StarFilled, LikeFilled, EyeFilled } from '@ant-design/icons';
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
        <button onClick={() => setQueryParams('filter', 'newest')} className='post-filter-item active'> 
          <StarFilled style={{color: 'green'}} className='post-filter-icon' />
          <div className='filter-desciption'>
            <p className='filter-title'>Newest and Recent</p>
            <p className='filter-sub-title'>Find the latest update</p>
          </div>
        </button>
        <button onClick={() => setQueryParams('filter', 'like')} className='post-filter-item '> 
          <EyeFilled style={{color: 'yellow'}} className='post-filter-icon' />
          <div className='filter-desciption'>
            <p className='filter-title'>Most viewed Post</p>
            <p className='filter-sub-title'>Top 10 viewed post</p>
          </div>
        </button>
        <button onClick={() => setQueryParams('filter', 'view')} className='post-filter-item'> 
          <LikeFilled style={{color: '#3366FF'}} className='post-filter-icon' />
          <div className='filter-desciption'>
            <p className='filter-title'>Most liked post</p>
            <p className='filter-sub-title'>Top 10 liked post</p>
          </div>
        </button>
    </div>
  )
}
