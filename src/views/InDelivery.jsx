import React, { useState, useEffect } from "react";
import OrderDetails from "../components/OrderCard";
import axios from "axios";

const InDelivery = props => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/all-orders")
      .then(res => {
        setOrder(res.data.filter(o => (o.status === "IN DELIVERY")));
      })
      .catch(err => {
        console.log(err);
      });
  },[]);

  return (
    <div className="auth-container">
      <div className="card">
        <h3 className="card-header text-center">Your delivery</h3>
        <OrderDetails order = {order}/>
      </div>
    </div>
  );
};

export default InDelivery;
