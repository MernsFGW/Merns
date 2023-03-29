import React from "react";
import { Link } from "react-router-dom";
import { Layout, ContentBox, MyChart } from "../../component";
import "./admin.css"

export const Admin = () => {
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
                <i className='bx bx-home' ></i>
                <span className="links_name">Homepage</span>
              </Link>
            </li>
            <li className="button-action">
              <Link to="/users">
                <i className='bx bxs-user-account' ></i>
                <span className="links_name">Accounts</span>
              </Link>
            </li>
            <li className="button-action">
              <Link to="/departments">
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
    </Layout>
  );
};
