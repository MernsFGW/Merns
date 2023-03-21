import React from "react";
import { Layout, ContentBox, CreateDepartmentForm } from "../../component";

export const AdminCreateDepartment = () => {
  return (
    <Layout>
      <div className="layout-panel primary">
        <ContentBox>
          <CreateDepartmentForm />
        </ContentBox>
      </div>
      <div className="layout-panel secondary"></div>
    </Layout>
  );
};
