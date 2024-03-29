import React from 'react';
import { CategoryFilter } from './category-filter';
import { Filter } from './filter';
import { ContentBox } from '../content-box';
import { useSearchParams } from 'react-router-dom';
import { ClearOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import FileSaver from 'file-saver';
import axios from 'axios';

export const FilterPanel = ({categoryList}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const user = JSON.parse(localStorage.getItem("user"));

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

    const downloadIdea = async () => {
        await axios.get('http://localhost:3000/api/ideas/download', {
            headers: {
                'Content-Encoding': 'gzip, deflate, br',
                'Content-Type': 'text/csv',
                'Authorization': user.token,
            }
        })
            .then(res => {
                const url = window.URL.createObjectURL(new Blob([res.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'IdeaData.csv')
                document.body.appendChild(link)
                link.click()
                link.remove()
            });
    }

    const downloadDocument = async () => {
        await axios.get('http://localhost:3000/api/documents/download', {
            responseType: 'blob'
        })
        .then((response) => {
            const file = new Blob([response.data], { type: 'application/zip' });
            FileSaver.saveAs(file, 'document.zip');
        }).catch((error) => console.log(error));
    }

    const downloadFeedback = async () => {
        await axios.get('http://localhost:3000/api/feedbacks/download', {
            headers: {
                'Content-Encoding': 'gzip, deflate, br',
                'Content-Type': 'text/csv',
                'Authorization': user.token,
            }
        })
            .then(res => {
                const url = window.URL.createObjectURL(new Blob([res.data]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'FeedbackData.csv')
                document.body.appendChild(link)
                link.click()
                link.remove()
            });
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
            {user && user.user.role.title === "Admin" ? <Button onClick={() => {downloadIdea(); downloadDocument(); downloadFeedback()}} shape='round'>Export Data</Button> : ''}
        </div>
    )
}
