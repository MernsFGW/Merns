import React, { useState } from 'react';
import { Form, Avatar, Input, Button, Switch, message } from 'antd';
import axios from 'axios';
import emailjs from 'emailjs-com';
import './form.css';

export const CommentForm = ({ userInfo, ideaId, setList, setData, setFeedbackCount }) => {
    const [incognito, setIncognito] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();

    const mutateData = (data) => {
        return {
            userId: userInfo.user.id,
            ideaId: ideaId,
            content: data.content,
            incognito: incognito
        }
    }

    function returnParamsTemplate(data) {
        return {
            to_name: `${data.ideaId.userId.username}`,
            from_name: "MERN system",
            author: `${data.ideaId.userId.username}`,
            message: `${userInfo.user.fullName} commented to your idea (${data.ideaId.content})\n
                      With content: ${data.content}\n
                `
        }
    }


    const onFinish = (values) => {
        setIsLoading(true);
        axios.post('http://localhost:3000/api/new/feedbacks', mutateData(values))
            .then(res => {
                if (res.status === 200) {
                    emailjs.send("service_j4lt9sj", "template_rclelrs", returnParamsTemplate(res.data), "U_SRsR_nYGeEwDxFb");
                }
                message.success('Comment success!');
                setIsLoading(false);
                setList(oldArray => [res.data, ...oldArray]);
                setData(oldArray => [res.data, ...oldArray]);
                setFeedbackCount(oldValue => oldValue + 1);
                form.resetFields();
            });
    };

    return (
        <>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <h5>Comment as Anonymous</h5>
                <Switch style={{ marginTop: 5 }} onChange={() => setIncognito(oldValue => !oldValue)} size='small'></Switch>
            </div>
            <Form
                form={form}
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
                        Comment
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
