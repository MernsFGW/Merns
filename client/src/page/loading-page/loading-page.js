import React from 'react';
import { Spin } from 'antd';
import './loading-page.css';

export const Loading = () => {
  return (
    <div className='loading-container'>
        <Spin />
    </div>
  )
}
