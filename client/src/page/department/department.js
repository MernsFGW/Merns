import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout, ContentBox } from "../../component";
import { List, Form, Input, Button, Modal, message } from "antd";
import { Link } from "react-router-dom";

export const Departments = () => {
  const [departmentList, setDepartmentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    fetchDepartmentList();
  }, []);

  const fetchDepartmentList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/departments");
      setDepartmentList(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/departments/new",
        { title: values.title }
      );
      setDepartmentList([...departmentList, response.data]);
      setShowCreateModal(false);
      form.resetFields();
      message.success("Department created successfully!");
    } catch (error) {
      console.log(error);
      message.error("Failed to create department");
    }
  };

  const handleUpdate = async (values) => {
    const { _id } = values;
    try {
      const response = await axios.put(
        `http://localhost:3000/api/departments/${_id}`,
        values
      );
      const updatedDepartmentList = await axios.get(
        "http://localhost:3000/api/departments"
      );
      setDepartmentList(updatedDepartmentList.data);
      setShowUpdateModal(false);
      form.resetFields();
      message.success("Department updated successfully!");
    } catch (error) {
      console.log(error);
      message.error("Failed to update department");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/departments/${id}`);
      const updatedDepartmentList = departmentList.filter(
        (department) => department._id !== id
      );
      setDepartmentList(updatedDepartmentList);
      message.success("Department deleted successfully!");
    } catch (error) {
      console.log(error);
      message.error("Failed to delete department");
    }
  };

  const handleEdit = (department) => {
    form.setFieldsValue(department);
    setShowUpdateModal(true);
  };

  return (
    <Layout>
      <div className="layout-panel extend">
        <div className="sidebar">
          <ul className="nav-links">
            <li className="button-action">
              <Link to="/admin">
                <i className="bx bx-grid-alt"></i>
                <span className="links_name">Dashboard</span>
              </Link>
            </li>
            <li className="button-action">
              <Link to="/">
                <i className="bx bx-home"></i>
                <span className="links_name">Homepage</span>
              </Link>
            </li>
            <li className="button-action">
              <Link to="/users">
                <i className="bx bxs-user-account"></i>
                <span className="links_name">Accounts</span>
              </Link>
            </li>
            <li className="button-action">
              <Link to="/departments">
                <i className="bx bx-area"></i>
                <span className="links_name">Departments</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="layout-panel primary">
        <ContentBox>
          <div className="content-header">
            <h2>Departments</h2>
            <Button
              type="primary"
              onClick={() => setShowCreateModal(true)}
              style={{ marginRight: 8 }}
            >
              New Department
            </Button>
          </div>
          <List
            loading={isLoading}
            dataSource={departmentList}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    type="primary"
                    onClick={() => handleEdit(item)}
                    style={{ marginRight: 8 }}
                  >
                    Edit
                  </Button>,
                  <Button
                    type="primary"
                    danger
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <List.Item.Meta className="item-display" title={item.title} />
              </List.Item>
            )}
          />
        </ContentBox>
      </div>
      <div className="layout-panel secondary"></div>
      <Modal
        title="Create Department"
        // eslint-disable-next-line no-undef
        visible={showCreateModal}
        onCancel={() => setShowCreateModal(false)}
        footer={null}
        destroyOnClose={true}
      >
        <Form form={form} layout="vertical" onFinish={handleCreate}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Update Department"
        // eslint-disable-next-line no-undef
        visible={showUpdateModal}
        onCancel={() => setShowUpdateModal(false)}
        footer={null}
        destroyOnClose={true}
      >
        <Form form={form} layout="vertical" onFinish={handleUpdate}>
          <Form.Item name="_id" hidden>
            <Input />
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input title!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};
