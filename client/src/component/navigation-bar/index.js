/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  UsergroupAddOutlined,
  AudioOutlined,
  BellOutlined,
  DownOutlined,
  ProjectFilled,
  HomeFilled,
} from "@ant-design/icons";
import { Input, Button, Avatar, Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";
import "./navigation-bar.css";

export const NavBar = () => {
  const { Search } = Input;
  const logoutUser = () => {
    localStorage.removeItem("user");
  };
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const onSearch = (value) => console.log(value);

  const items = [
    {
      key: "1",
      label: (
        <a
          onClick={() => {
            navigate(`/users/${userInfo.user.id}`);
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          User Profile
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          onClick={() => {
            navigate("/admin");
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin Page
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          onClick={() => {
            logoutUser();
            navigate("/");
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Logout
        </a>
      ),
    },
  ];

  return (
    <div className="navbar-wrapper">
      <div className="first-navbar-part">
        <div className="app-logo-wrapper">
          <img
            alt=""
            className="app-logo"
            src="https://i.imgur.com/MDzKpLi.png"
          />
        </div>
        <h3 className="app-title">University Debate</h3>
      </div>
      <div className="middle-navbar-part">
        <div className="navigation-btn-grp">
          <HomeFilled onClick={() => navigate("/")} className="active" />
        </div>
        <div className="search-engine">
          <Search
            placeholder="Type here to search..."
            onSearch={onSearch}
            enterButton
            size="large"
          />
        </div>
      </div>
      <div className="last-navbar-part">
        {userInfo ? (
          <>
            <div className="noti-icon">
              <BellOutlined />
            </div>
            <div className="user-section">
              <Avatar
                shape="square"
                size={38}
                src={`https://ui-avatars.com/api/?name=${userInfo.user.fullName}`}
              />
              <Dropdown
                className=""
                trigger={["click"]}
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <h4>{userInfo.user.fullName}</h4>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </>
        ) : (
          <>
            <Button
              onClick={() => navigate("/login")}
              size="large"
              className="login-btn"
              type="primary"
            >
              Login
            </Button>
            <Button size="large" className="register-btn">
              Register
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
