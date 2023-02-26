import React, { useState, useEffect } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Upload,
    message,
    Input,
    Select
} from 'antd';
import axios from 'axios';
import './form.css';

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e.file;
};

function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}

export const UpdateIdeaForm = ({ handleClose, setData, initialIdea }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/categories')
            .then(res => setCategoryList(res.data));
    }, [])

    const options = categoryList.map(item => {
        return {
            label: item.title,
            value: item._id,
        }
    })

    const onFinish = (values) => {
        // setIsLoading(true);
        // axios.put(`http://localhost:3000/api/${initialIdea.id}`, getFormData(values))
        //     .then(res => {
        //         handleClose();
        //         setData(res.data);
        //         message.success(`${res.data.idea.title} updated success!`);
        //         setIsLoading(false);
        //     })
        console.log(values)
    };

    return (
        <Form
            initialValues={initialIdea.idea}
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
                name="category"
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
                rules={[{ required: true, message: 'Please input idea image!' }]}
                label={<p><b>Image</b></p>}
            >
                <Form.Item
                    name="photo" valuePropName="photo"
                    getValueFromEvent={normFile}
                    noStyle
                >
                    <Upload.Dragger
                        name='file'
                        beforeUpload={() => false}
                    >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload.
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