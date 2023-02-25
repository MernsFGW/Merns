import React, {useEffect, useState} from 'react'
import { NavBar } from '../navigation-bar';
import axios from 'axios';
import { loadingUser } from '../../redux/user';
import { useSelector, useDispatch } from 'react-redux'
import './layout.css';

export const Layout = ({children}) => {

  const dispatch = useDispatch()
  const userLoginInfo = {
    username: "testlinhuser",
    password: "1"
  }

  useEffect(() => {
    axios.post("http://localhost:3000/api/login", userLoginInfo)
      .then((res) => {localStorage.setItem("user", JSON.stringify(res.data));})
  }, []);


  return (
    <div className='layout-wrapper'>
        <div className='layout-header'>
            <NavBar />
        </div>
        <div className='page-content'>
          {children}
        </div>
    </div>
  )
}
