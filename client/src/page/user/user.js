import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, ContentBox } from "../../component";
import { Avatar, List, Button, message } from "antd";
import { Link } from "react-router-dom";

export const Users = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loginUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users", {
        headers: {
          Authorization: loginUser.token,
        },
      })
      .then((res) => {
        setUserList(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    setIsLoading(false);
  }, []);

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:3000/api/users/${userId}`, {
        headers: {
          Authorization: loginUser.token,
        },
      })
      .then((res) => {
        const updatedUserList = userList.filter((user) => user._id !== userId);
        setUserList(updatedUserList);
        message.success("User deleted successfully!");
      })
      .catch((error) => {
        console.log(error);
        message.error("Failed to delete user");
      });
  };

  return (
    <Layout>
      <div className="layout-panel extend">
        <div className="sidebar">
          <ul className="nav-links">
            <li>
              <Link to="/admin">
                <i className="bx bx-grid-alt"></i>
                <span className="links_name">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="bx bx-box"></i>
                <span className="links_name">Main</span>
              </Link>
            </li>
            <li>
              <Link to="/users">
                <i className="bx bx-user"></i>
                <span className="links_name">Staff</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-list-ul"></i>
                <span className="links_name">Order list</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-pie-chart-alt-2"></i>
                <span className="links_name">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-folder"></i>
                <span className="links_name">File Manager</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-cart-alt"></i>
                <span className="links_name">Products</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-cog"></i>
                <span className="links_name">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="layout-panel primary">
        <ContentBox>
          <h2>All Users</h2>
        </ContentBox>
        <List
          loading={isLoading}
          className="user-list"
          itemLayout="vertical"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 5,
            align: "center",
            className: "user-list-pagination",
          }}
          dataSource={userList}
          renderItem={(user) => (
            <List.Item>
              <ContentBox>
                <div className="user-info">
                  <Avatar
                    size={38}
                    src={`https://ui-avatars.com/api/?name=${user.fullName}`}
                  />
                  <div className="user-name">{user.fullName}</div>
                  <Button onClick={() => handleDelete(user._id)}>Delete</Button>
                </div>
              </ContentBox>
            </List.Item>
          )}
        />
      </div>
      <div className="layout-panel secondary"></div>
    </Layout>
  );
};
