import React from 'react';
import {Layout, ContentBox, MyChart} from '../../component';

export const Admin = () => {
    return (
       <Layout>
            <div className='layout-panel extend'></div>
            <div className='layout-panel primary'>
                <ContentBox>
                    <MyChart />
                </ContentBox>
            </div>
            <div className='layout-panel secondary'></div>
       </Layout>
    )
}
