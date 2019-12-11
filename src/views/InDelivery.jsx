import React, { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard";
import axios from "axios";

const InDelivery = props => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/all-orders")
      .then(res => {
        console.log("res details", res);
        setOrder(res.data.filter(o => o.status === "IN DELIVERY"));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const updateOrder = input => {
    let updatedData = { status: "DELIVERED" };
    axios
      .patch(
        process.env.REACT_APP_BACKEND_URL + "/edit-order/" + input,
        updatedData
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="auth-container">
      <div className="card">
        <h3 className="card-header text-center">Your delivery</h3>
        <OrderCard order={order} handleClick={updateOrder} />
      </div>
    </div>
  );
};

export default InDelivery;
