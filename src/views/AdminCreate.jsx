import React, { useState, useEffect } from "react";
import CreateFood from "../components/CreateFood";
import AdminSidebar from "../components/AdminSidebar";
import axios from "axios";

const AdminCreate = props => {
  const createFood = infos => {
    console.log(infos);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/create-food", infos)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <div className="row">
        <AdminSidebar />
        <CreateFood clbk={createFood} />
      </div>
    </div>
  );
};
export default AdminCreate;
