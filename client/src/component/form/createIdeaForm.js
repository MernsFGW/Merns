import { InboxOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Select,
    Upload,
    message,
    Input
} from 'antd';
import axios from 'axios';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};
const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const onFinish = (values) => {
    const idea = {
        title: values.title,
        content: values.content,
        photo: values.photo[0],
    };
    console.log(idea);
    axios.post(`http://localhost:3000/api/ideas/new/63f44cb17a627d4348830c71`, { idea })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
};
export const CreateIdeaForm = () => (
    <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        style={{
            width: 600,
        }}
    >
        <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input idea title!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Content"
            name="content"
            rule={[{ required: true, message: 'Please input idea content!' }]}
        >
            <Input.TextArea placeholder="textarea with clear icon" allowClear />
        </Form.Item>
        {/* <Form.Item
            name="select-multiple"
            label="Select[multiple]"
            rules={[
                {
                    required: true,
                    message: 'Please select your favourite colors!',
                    type: 'array',
                },
            ]}
        >
            <Select mode="multiple" placeholder="Please select favourite colors">
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
            </Select>
        </Form.Item> */}
        <Form.Item label="Image">
            <Form.Item name="photo" valuePropName="photo" getValueFromEvent={normFile} noStyle>
                <Upload.Dragger  {...props} >
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
            wrapperCol={{
                span: 12,
                offset: 6,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);