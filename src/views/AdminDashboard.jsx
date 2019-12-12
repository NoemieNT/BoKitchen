import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import MapWrap from "../components/MapWrap";
import AdminOrdersTable from "../components/AdminOrdersTable";
import Checkboxes from "../components/Checkboxes";
import APIHandler from "./../api/handler";
import { Redirect } from "react-router-dom";
import { useAuth } from "./../auth/UseAuth";

const AdminDashboard = props => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [zipCodes, setZipcodes] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    APIHandler.get("/all-orders")
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const setZipcodeState = arrondissements => {
    setZipcodes(arrondissements);
  };

  const setStatusState = input => {
    console.log(status);
    if (input.checked) {
      setStatus([...status, input.value]);
    } else setStatus(status.filter(i => i !== input.value));
  };

  const filterOrders = orders => {
    if (zipCodes.length === 0 && status.length === 0) {
      return orders;
    } else if (status.length === 0 && zipCodes.length !== 0) {
      return orders.filter(order => zipCodes.includes(order.zipcode));
    } else if (zipCodes.length === 0 && status.length !== 0) {
      return orders.filter(order => status.includes(order.status));
    } else {
      return orders
        .filter(order => zipCodes.includes(order.zipcode))
        .filter(order => status.includes(order.status));
    }
  };

  if (!currentUser) return null;

  return currentUser.role === "ADMIN" ? (
    <div className="container">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-8 order-md-2">
          <h1 className="text-center">Dashboard</h1>
          <MapWrap clbk={setZipcodeState} />
          <Checkboxes filter={setStatusState} />
          <AdminOrdersTable orders={filterOrders(orders)} />
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/dashboard" />
  );
};

export default AdminDashboard;
