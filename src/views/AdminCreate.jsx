import React, { useState, useEffect } from "react";
import CreateFood from "../components/CreateFood";
import AdminSidebar from "../components/AdminSidebar";
import APIHandler from "./../api/handler";
import { useAuth } from "./../auth/UseAuth";
import { Redirect } from "react-router-dom";

const AdminCreate = props => {
  const { currentUser } = useAuth();

  const createFood = infos => {
    APIHandler.post("/create-food", infos)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  if (!currentUser) return null;

  return currentUser.role === "ADMIN" ? (
    <div className="container">
      <div className="row">
        <AdminSidebar />
        <CreateFood clbk={createFood} />
      </div>
    </div>
  ) : (
    <Redirect to="/dashboard" />
  );
};
export default AdminCreate;
