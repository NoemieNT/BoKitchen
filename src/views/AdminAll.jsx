import React from "react";
import AdminCreate from "./AdminCreate";
import AdminDashboard from "./AdminDashboard";
import AdminManage from "./AdminManage";

const forms = {
  adminCreate: AdminCreate,
  adminDashboard: AdminDashboard,
  adminManage: AdminManage
};

export default function AdminForms(props) {
  const { endpoint, id: resourceId, mode } = props.match.params;

  return (
    <div>
      <h1 className="title">{endpoint}</h1>
    </div>
  );
}
