import React from "react";
import OrderDetails from "./OrderDetails";

export default function OrderCard({ order, handleClick }) {
  return (
    <div>
      {order.map((order, i) => (
        <div className="card-body" key={i}>
          <h5 className="card-title">Delivery information</h5>
          <p className="card-text">
            {order.address} {order.zipcode}
          </p>
          <p className="card-text">{order.information} </p>
          <h5 className="card-title">Order Details</h5>
          <OrderDetails orderDetails={order.details} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Sous-total : x €</li>
            <li className="list-group-item">Frais de livraison : x €</li>
            <li className="list-group-item">Total : x €</li>
          </ul>
          <a
            href="/dashboard"
            onClick={evt => handleClick(order._id)}
            className="btn btn-primary"
          >
            Delivered
          </a>
        </div>
      ))}
    </div>
  );
}
