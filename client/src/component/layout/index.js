import React from 'react'
import { NavBar } from '../navigation-bar';
import './layout.css';

export const Layout = ({children}) => {
  return (
    <div className='layout-wrapper'>
        <div className='layout-header'>
            <NavBar />
        </div>
        <div className='page-content'>{children}</div>
    </div>
  )
}
