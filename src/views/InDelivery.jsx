import React, { useState, useEffect } from "react";
import OrderCard from "../components/OrderCard";
import OrderCardCustomer from "../components/OrderCardCustomer";
import APIHandler from "./../api/handler";
import { useAuth } from "./../auth/UseAuth";

const InDelivery = props => {
  const { currentUser, isLoading } = useAuth();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    APIHandler.get("/current-order")
      .then(res => {
        setOrder(res.data.filter(o => o.status !== "DELIVERED"));
      })
      .catch(err => {
        console.log(err);
      });
  }, [currentUser]);

  const updateOrder = input => {
    let updatedData = { status: "DELIVERED" };
    APIHandler.patch("/edit-order/" + input, updatedData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  if (isLoading || !order.length || !currentUser) return null;

  return currentUser.role === "DELIVERER" ? (
    <div id="indelivery-container">
      <div className="auth-container">
        <div className="card">
          <h3 className="card-header text-center">Your delivery</h3>
          <OrderCard order={order} handleClick={updateOrder} />
        </div>
      </div>
    </div>
  ) : (
    <div className="auth-container">
      <div className="card">
        <h3 className="card-header text-center">Your delivery</h3>
        <OrderCardCustomer order={order} handleClick={updateOrder} />
      </div>
    </div>
  );
};

export default InDelivery;
