import React, { useState } from 'react';
import { Form, Avatar, Input, Button, message } from 'antd';
import axios from 'axios';
import emailjs from 'emailjs-com';
import './form.css';

export const EditCommentForm = ({setEditMode, userInfo, feedback, setList, setData }) => {
    const [isLoading, setIsLoading] = useState(false);

    function returnParamsTemplate(data) {
        return {
            to_name: `${data.ideaId.userId.username}`,
            from_name: "MERN system",
            message: `Your comment in ${data.ideaId.content} post have been edited\n
                      With content: ${data.content}\n
                `
        }
    }

    const onFinish = (values) => {
        setIsLoading(true);
        axios.put(`http://localhost:3000/api/feedbacks/${feedback._id}`, values)
            .then(res => {
                if (res.status === '200') {
                    emailjs.send("service_j4lt9sj", "template_rclelrs", returnParamsTemplate(res.data), "U_SRsR_nYGeEwDxFb");
                }
                message.success('Edit comment success!');
                setIsLoading(false);
                setList(oldArray => { 
                    oldArray.splice(oldArray.findIndex(item => item._id === feedback._id), 1, res.data);
                    return oldArray;
                });
                setData(oldArray => { 
                    oldArray.splice(oldArray.findIndex(item => item._id === feedback._id), 1, res.data);
                    return oldArray;
                });
                setEditMode('');
            });
    };

    return (
        <>
            <Form
                initialValues={{
                    content: feedback.content
                }}
                className='create-comment-form'
                onFinish={onFinish}
                style={{ width: '100%', gap: 20 }}
                layout='inline'
            >
                <Form.Item
                    colon={false}
                    label={<Avatar size={40} src={`https://ui-avatars.com/api/?name=${userInfo.user.fullName}`} />}
                    name="content"
                    style={{ flex: '2' }}
                >
                    <Input size='large' placeholder='Leave your comment here...' />
                </Form.Item>
                <Form.Item>
                    <Button className='comment-action-btn' disabled={isLoading} size='large' type="primary" htmlType="submit">
                        Edit
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button className='comment-action-btn' ghost danger onClick={() => setEditMode('')} size='large' >
                        Cancle
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
