import React, { useEffect, useState } from 'react';
import { TagsFilled } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import './filter.css';

export const CategoryFilter = ({ categoryList, setQueryParams, removeQueryParams }) => {

  return (
    <div className='post-filter-container'>
      { categoryList.map(item => (
        <button key={item._id} onClick={() =>{removeQueryParams('sort'); setQueryParams('categoryId', item._id)}} className='post-filter-item'>
          <TagsFilled style={{ color: '#B5F1CC' }} className='post-filter-icon' />
          <div className='filter-desciption'>
            <p className='filter-title'>{item.title} idea</p>
          </div>
        </button>
      ))}
    </div>
  )
}
