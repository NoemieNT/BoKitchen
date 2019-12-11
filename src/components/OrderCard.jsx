import React, { Component } from "react";
import OrderDetails from "./OrderDetails";
import axios from "axios";

export default class OrderCard extends Component {
  state = {
    foods: [],
    totalPrice: ""
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/foods")
      .then(res => {
        this.setState({ foods: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.props.order.map(
          (order, i) => (
            console.log("order", order),
            (
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
                    {order.details.reduce((sum, f) => {
                      return (sum += f.food.price * f.quantity);
                    }, 0)}
                  </li>
                  <li className="list-group-item">
                    Frais de livraison : $2,50
                  </li>
                  <li className="list-group-item">
                    Total : $
                    {order.details.reduce((sum, f) => {
                      return (sum += f.food.price * f.quantity);
                    }, 0) + 2.5}
                  </li>
                </ul>
                <a
                  href="/dashboard"
                  onClick={evt => this.props.handleClick(order._id)}
                  className="btn btn-primary"
                >
                  Delivered
                </a>
              </div>
            )
          )
        )}
      </div>
    );
  }
}
