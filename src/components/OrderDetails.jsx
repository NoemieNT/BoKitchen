import React, { Component } from "react";

export default class OrderDetails extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <h3 className="card-header text-center">Your order</h3>
          <div className="card-body">
            <h5 className="card-title">Delivery information</h5>
            <p className="card-text">Address + Zipcode</p>
            <p className="card-text">Delivery information</p>
            <h5 className="card-title">Details</h5>
            <p className="card-text">ligne de commande (component à faire)</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Sous-total : x €</li>
              <li className="list-group-item">Frais de livraison : x €</li>
              <li className="list-group-item">Total : x €</li>
            </ul>

            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}
