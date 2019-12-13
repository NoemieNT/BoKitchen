import React, { Component } from "react";
import OrderDetails from "./OrderDetails";
import APIHandler from "./../api/handler";

export default class OrderCardCustomer extends Component {
  state = {
    foods: [],
    totalPrice: ""
  };

  componentDidMount() {
    APIHandler.get("/foods")
      .then(res => {
        this.setState({ foods: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      Boolean(this.state.foods.length) && (
        <div>
          {this.props.order.map((order, i) => (
            <div className="card-body" key={i}>
              <h5 className="card-title">Delivery information</h5>
              <p className="card-text">
                {order.address} {order.zipcode}
              </p>
              <p className="card-text">{order.information} </p>
              <h5 className="card-title">Order Details</h5>
              <OrderDetails orderDetails={order.details} />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Sous-total : $
                  {order.details.reduce((sum, o) => {
                    if (o.food === null) return <p>soucis food is null</p>;
                    return (sum += o.food.price * o.quantity);
                  }, 0)}
                </li>
                <li className="list-group-item">Frais de livraison : $2,50</li>
                <li className="list-group-item">
                  Total : $
                  {order.details.reduce((sum, o) => {
                    if (o.food === null) return <p>soucis food is null</p>;
                    return (sum += o.food.price * o.quantity);
                  }, 0) + 2.5}
                </li>
              </ul>
            </div>
          ))}
        </div>
      )
    );
  }
}
