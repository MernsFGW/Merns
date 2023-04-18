import React from 'react';
import { Layout, ContentBox, NavigationAdmin, Password } from '../../component';

export const UserPassword = () => {
    return (
      <Layout>
        <div className='layout-panel secondary'>
            <NavigationAdmin />
        </div>
        <div className='layout-panel primary'>
            <ContentBox >
                <Password />
            </ContentBox>
        </div>
        <div className='layout-panel extend'>
        </div>
      </Layout>
    )
}
