import React, { Component } from "react";
import axios from "axios";

export class Cart extends Component {
  render() {
    return (
      <div>
        <h1>i'm cart</h1>
        {!this.props.products.length && <p>no product selected yet...</p>}
        {Boolean(this.props.products.length) &&
          this.props.products.map((p, i) => (
            <p key={i}>
              {p.quantity} {this.props.foods[p.index].name} :{" "}
              {this.props.foods[p.index].price}$
            </p>
          ))}
        <form onSubmit={this.handleFormSubmit}>
          <button className="btn btn-default" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Cart;
