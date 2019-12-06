import React from "react";

export default function OrderDetails({ orderDetails }) {
  return (
    <div>
      {orderDetails.map((order, i) => (
        <div key={i}>
          <p className="card-text">
            {order.quantity} + {order.food.name} + "food name et food price
            unitaire et total"
          </p>
        </div>
      ))}
    </div>
  );
}
