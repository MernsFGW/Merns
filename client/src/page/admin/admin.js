import React from "react";
import { Link } from "react-router-dom";
import { Layout, ContentBox, MyChart } from "../../component";

export const Admin = () => {
  return (
    <Layout>
      <div className="layout-panel extend">
        <div class="sidebar">
          <ul class="nav-links">
            <li>
              <Link to="/admin">
                <i class="bx bx-grid-alt"></i>
                <span class="links_name">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/ideas">
                <i class="bx bx-box"></i>
                <span class="links_name">Main</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-list-ul"></i>
                <span class="links_name">Order list</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-pie-chart-alt-2"></i>
                <span class="links_name">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-coin-stack"></i>
                <span class="links_name">Stock</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-book-alt"></i>
                <span class="links_name">Total order</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-user"></i>
                <span class="links_name">Team</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-message"></i>
                <span class="links_name">Messages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-heart"></i>
                <span class="links_name">Favrorites</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-cog"></i>
                <span class="links_name">Setting</span>
              </a>
            </li>
            <li class="log_out">
              <a href="#">
                <i class="bx bx-log-out"></i>
                <span class="links_name">Log out</span>
              </a>
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
