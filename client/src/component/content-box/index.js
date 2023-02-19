import React from 'react';
import './content-box.css';

export const ContentBox = ({children}) => {
  return (
    <div className='box-content-wrapper'>{children}</div>
  )
}
