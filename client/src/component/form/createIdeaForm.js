import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
    Button,
    Form,
    Upload,
    message,
    Input,
    Select,
    Switch
} from 'antd';
import { addIdea } from '../../redux/idea';

import axios from 'axios';
import './form.css';
import emailjs from 'emailjs-com';

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e.file;
};

function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => {
        if (key === 'incognito' && typeof object[key] === 'undefined') {
            formData.append(key, false)
        }
        else {
            formData.append(key, object[key])
        }
    });
    return formData;
}

export const CreateIdeaForm = ({ handleClose, termList, categoryList }) => {
    const [isLoading, setIsLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const currentDate = new Date();
    const ideaTerm = termList.find(term => new Date(term.startDate) <= currentDate && currentDate < new Date(term.endDate));

    const options = categoryList.map(item => {
        return {
            label: item.title,
            value: item._id,
        }
    })
    function returnParamsTemplate(data) {
        return {
            to_name: "Departments QA Coordinator",
            from_name: "MERN system",
            message: `${user.user.username} added new idea
                      Title: ${data.idea.title}
                      Content: ${data.idea.content}
                      Created at: ${data.idea.createdAt}
                      Category: ${data.idea.categoryId.title}
                      Term: ${data.idea.termId}
                `
        }
    }

    const onFinish = (values) => {
        setIsLoading(true);
        axios.post(`http://localhost:3000/api/ideas/new/${user.user.id}`, getFormData({ ...values, termId: ideaTerm._id }))
            .then(res => {
                if (res.status === '200') {
                    emailjs.send("service_j4lt9sj","template_1a9oz2d", returnParamsTemplate(res.data), "U_SRsR_nYGeEwDxFb");
                }
                handleClose();
                dispatch(addIdea(res.data.idea));
                message.success(`${res.data.idea.title} created success!`);
                setIsLoading(false);
            })
            .catch(error => console.log(error));
    };


    return (
        <Form
            layout='vertical'
            name="validate_other"
            onFinish={onFinish}
            style={{
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                width: 400,
                padding: '0 30px',
            }}
        >
            <h2 className='form-title'>Create new Idea</h2>
            <Form.Item
                valuePropName="checked"
                className='incognito-mode'
                label={<p><b>Post as Anonymous</b></p>}
                name="incognito"
            >
                <Switch size='small' />
            </Form.Item>
            <Form.Item
                label={<p><b>Title</b></p>}
                name="title"
                rules={[{ required: true, message: 'Please input idea title!' }]}
            >
                <Input placeholder='Enter your idea title...' />
            </Form.Item>
            <Form.Item
                label={<p><b>Content</b></p>}
                name="content"
                rules={[{ required: true, message: 'Please input idea content!' }]}
            >
                <Input.TextArea placeholder="Enter your wonderfull iead content..." allowClear />
            </Form.Item>
            <Form.Item
                label={<p><b>Category</b></p>}
                name="categoryId"
                rules={[{ required: true, message: 'Please select idea category!' }]}
            >
                <Select
                    showSearch
                    placeholder="Select a category"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.label.toLowerCase().includes(input.toLowerCase())
                    }
                    options={options}
                />
            </Form.Item>
            <Form.Item
                label={<p><b>Image</b></p>}
            >
                <Form.Item
                    name="photo" valuePropName="photo"
                    getValueFromEvent={normFile}
                    noStyle
                >
                    <Upload.Dragger
                        accept="image/png, image/jpeg"
                        name='file'
                        beforeUpload={() => false}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag image to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single upload.
                        </p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>
            <Form.Item
                style={{ alignSelf: 'center' }}
            >
                <Button disabled={isLoading} className='submit-form-btn' type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};