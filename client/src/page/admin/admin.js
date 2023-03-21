import React from "react";
import { Link } from "react-router-dom";
import { Layout, ContentBox, MyChart } from "../../component";
import './admin.css'

export const Admin = () => {
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
              <Link to="/admin">
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
          <MyChart />
        </ContentBox>
      </div>
      <div className="layout-panel secondary"></div>
    </Layout>
  );
};
