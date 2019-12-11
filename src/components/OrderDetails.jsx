import React, { Component } from "react";
import axios from "axios";

export default class OrderDetails extends Component {
  render() {
    return (
      <div>
        {this.props.orderDetails.map((order, i) => (
          <div key={i}>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">
                  {order.quantity} {order.food.name}
                </h6>
              </div>
              <span className="text-muted">
                ${order.food.price * order.quantity}
              </span>
            </li>
          </div>
        ))}
      </div>
    );
  }
}
