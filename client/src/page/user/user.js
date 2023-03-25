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
        <div class="sidebar">
          <ul class="nav-links">
            <li class="button-action">
              <Link to="/admin">
                <i class="bx bx-grid-alt"></i>
                <span class="links_name">Dashboard</span>
              </Link>
            </li>
            <li className="button-action">
              <Link to="/">
                <i class='bx bx-home' ></i>
                <span class="links_name">Homepage</span>
              </Link>
            </li>
            <li className="button-action">
              <Link to="/users">
                <i class='bx bxs-user-account' ></i>
                <span class="links_name">Accounts</span>
              </Link>
            </li>
            <li className="button-action">
              <Link to="/admin">
                <i class='bx bx-area' ></i>
                <span class="links_name">Departments</span>
              </Link>
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
