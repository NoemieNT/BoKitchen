import React, { useState, useEffect } from "react";
import MapWrap from "../components/MapWrap";
import DelivererOrdersTable from "../components/DelivererOrdersTable";
import APIHandler from "./../api/handler";
import { useAuth } from "./../auth/UseAuth";

const Dashboard = props => {
  const [validatedOrders, setValidatedOrders] = useState([]);
  const [zipCodes, setZipcodes] = useState([]);
  const { currentUser, isLoading } = useAuth();

  useEffect(() => {
    APIHandler.get("/validated-orders")
      .then(res => {
        setValidatedOrders(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const setZipcodeState = arrondissements => {
    setZipcodes(arrondissements);
  };

  const filterOrders = validatedOrders => {
    if (zipCodes.length === 0) {
      return validatedOrders;
    } else {
      return validatedOrders.filter(order => zipCodes.includes(order.zipcode));
    }
  };

  const updateOrder = input => {
    let updatedData = { status: "IN DELIVERY", deliverer: currentUser._id };
    APIHandler.patch("/edit-order/" + input, updatedData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  if (!currentUser) return null;

  return (
    <div className="container">
      <h1 className="text-center">Welcome {currentUser.firstname}</h1>
      <div className="row">
        <p className="text-center">Select your delivery zone</p>
        <MapWrap clbk={setZipcodeState} />
        <DelivererOrdersTable
          validatedOrders={filterOrders(validatedOrders)}
          handleClick={updateOrder}
        />
      </div>
    </div>
  );
};

export default Dashboard;
