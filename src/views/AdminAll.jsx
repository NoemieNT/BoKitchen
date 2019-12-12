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
  const ActiveForm = forms[endpoint];

  return !ActiveForm ? null : (
    <div>
      <h1 className="title">
        <IconBack size="xs" />
        {mode === "edit" ? "Edit" : "New"} {endpoint}
      </h1>
      <hr />
      <ActiveForm mode={mode} _id={resourceId} />
    </div>
  );
}
