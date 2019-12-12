import React, { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard";
import axios from "axios";
import { useAuth } from "./../auth/UseAuth";

const InDelivery = props => {
  const { currentUser, isLoading } = useAuth();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (!isLoading)
      axios
        .get(
          process.env.REACT_APP_BACKEND_URL +
            "/customer-orders/" +
            currentUser._id
        )
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

  if (isLoading) return null;

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
