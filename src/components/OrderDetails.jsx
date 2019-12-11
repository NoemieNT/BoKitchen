import React from "react";
import axios from "axios";

export default function OrderDetails({ orderDetails }) {
  return (
    <div>
      {orderDetails.map((order, i) => (
        <div key={i}>
          <p className="card-text">
            {order.quantity} + {order.food} + "food name et food price unitaire
            et total"
          </p>
        </div>
      ))}
    </div>
  );
}
