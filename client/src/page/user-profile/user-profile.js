import React from 'react';
import { Layout, ContentBox, NavigationAdmin, Profile } from '../../component';

export const UserProfile = () => {
  const userInfo = JSON.parse(localStorage.getItem('user'));
    return (
      <Layout>
        <div className='layout-panel secondary'>
            <NavigationAdmin />
        </div>
        <div className='layout-panel primary'>
            <ContentBox >
                <Profile />
            </ContentBox> 
        </div>
        <div className='layout-panel extend'>
        </div>
      </Layout>
    )
}
