import React from 'react';
import {useSearchParams} from 'react-router-dom'

export const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const setQueryParams = () => {
        setSearchParams({keyword: 'sdasd'});
    }

    const removeQueryParams = () => {
        const param = searchParams.get('keyword');
        console.log(param);
    
        if (param) {
          searchParams.delete('keyword');
          setSearchParams(searchParams);
          console.log(searchParams.get('keyword'))
        }
      };

    return (
        <div className='post-filter-container'>
        </div>
    )
}
