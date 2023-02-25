import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Upload,
    message,
    Input
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

export const CreateIdeaForm = ({ handleClose, setIdeaList }) => {
    const onFinish = (values) => {
        axios.post(`http://localhost:3000/api/ideas/new/63f83b5bca99671d249f8cb7`, getFormData(values))
            .then(res => {
                handleClose();
                setIdeaList(oldArray => [...oldArray, res.data.idea]);
                message.success(`${res.data.idea.title} created success!`);
            })
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
                <Button className='submit-form-btn' type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};