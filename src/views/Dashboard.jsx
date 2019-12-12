import React, { useState, useEffect } from "react";
import MapWrap from "../components/MapWrap";
import DelivererOrdersTable from "../components/DelivererOrdersTable";
import axios from "axios";
import { useAuth } from "./../auth/UseAuth";

const Dashboard = props => {
  const [validatedOrders, setValidatedOrders] = useState([]);
  const [zipCodes, setZipcodes] = useState([]);
  const { currentUser, isLoading } = useAuth();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/validated-orders")
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
    let updatedData = { status: "IN DELIVERY" };
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
    <div className="container">
      <h1 className="text-center">Welcome {currentUser.firstname}</h1>
      <div className="row">
        <div className="col">
          <p className="text-center">Select your delivery zone</p>
          <MapWrap clbk={setZipcodeState} />
        </div>
        <div className="col">
          <DelivererOrdersTable
            validatedOrders={filterOrders(validatedOrders)}
            handleClick={updateOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
