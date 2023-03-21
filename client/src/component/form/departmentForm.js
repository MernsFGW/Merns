import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, message, Input } from "antd";
import { addDepartment } from "../../redux/department";

import axios from "axios";
import "./form.css";

function getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    if (key === "incognito" && typeof object[key] === "undefined") {
      formData.append(key, false);
    } else {
      formData.append(key, object[key]);
    }
  });
  return formData;
}

export const CreateDepartmentForm = ({ handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    setIsLoading(true);
    axios
      .post(
        `http://localhost:3000/api/departments/new`,
        getFormData({ ...values })
      )
      .then((res) => {
        handleClose();
        dispatch(addDepartment(res.data.department));
        message.success(`${res.data.department.title} created success!`);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form
      layout="vertical"
      name="validate_other"
      onFinish={onFinish}
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        width: 400,
        padding: "0 30px",
      }}
    >
      <h2 className="form-title">Create new Department</h2>
      <Form.Item
        label={
          <p>
            <b>Title</b>
          </p>
        }
        name="title"
        rules={[{ required: true, message: "Please input department title!" }]}
      >
        <Input placeholder="Enter your deparment title..." />
      </Form.Item>
      <Form.Item style={{ alignSelf: "center" }}>
        <Button
          disabled={isLoading}
          className="submit-form-btn"
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
