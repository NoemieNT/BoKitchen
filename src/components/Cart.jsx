import React, { Component } from "react";
import axios from "axios";

export class Cart extends Component {
  render() {
    return (
      <div>
        <h1>Cart</h1>
        {!this.props.products.length && <p>no product selected yet...</p>}
        {Boolean(this.props.products.length) && (
          <table className="table-borderless">
            <thead>
              <tr>
                <th scope="col">Qty</th>
                <th scope="col">Name</th>
                <th scope="col">PU</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((p, i) => (
                <tr key={i}>
                  <td>{p.quantity}</td>
                  <td>{this.props.foods[p.index].name}</td>
                  <td>
                    {this.props.foods[p.index].price}
                    <spans>$</spans>
                  </td>
                  <td>
                    {this.props.foods[p.index].price * p.quantity}
                    <spans>$</spans>
                  </td>
                </tr>
              ))}
              <td class="table-active" colSpan="4">
                Total :
                {[...this.props.products]
                  .map(p => p.quantity * this.props.foods[p.index].price)
                  .reduce((prev, next) => prev + next)}
                $
              </td>
            </tbody>
          </table>
        )}
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
