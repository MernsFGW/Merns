import React from 'react';
import { CategoryFilter } from './category-filter';
import { Filter } from './filter';
import { ContentBox } from '../content-box';
import { useSearchParams } from 'react-router-dom';
import { ClearOutlined } from '@ant-design/icons';

export const FilterPanel = ({categoryList}) => {
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

    const [key] = searchParams.entries();

    const removeAllParams = () => {
        for (const [key, value] of searchParams.entries()) {
            removeQueryParams(key);
        }
    }

    return (
        <div className='filter-panel'>
            <div className='filter-panel-title'>
                <h3>Filter Panel</h3>
                {typeof key !== 'undefined' && <p onClick={removeAllParams}><ClearOutlined /> Reset filter</p>}
            </div>
            <ContentBox>
                <Filter setQueryParams={setQueryParams} removeQueryParams={removeQueryParams} />
            </ContentBox>
            <ContentBox>
                <h5 style={{paddingBottom: 10}}>#Category</h5>
                <CategoryFilter setQueryParams={setQueryParams} removeQueryParams={removeQueryParams} categoryList={categoryList} />
            </ContentBox>
        </div>
    )
}
