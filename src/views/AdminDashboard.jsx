import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import MapWrap from "../components/MapWrap";
import AdminOrdersTable from "../components/AdminOrdersTable";
import Checkboxes from "../components/Checkboxes";
import axios from "axios";

const AdminDashboard = props => {
  const [orders, setOrders] = useState([]);
  const [zipCodes, setZipcodes] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/all-orders")
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

  const setStatusState = status => {
    if (status.checked) {
      setStatus(status.value);
    }
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

  return (
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
  );
};

export default AdminDashboard;
