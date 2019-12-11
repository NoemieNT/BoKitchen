import React, { Component } from "react";
import axios from "axios";

export class Cart extends Component {
  state = { infos: {} };

  handleChange = e => {
    const copy = { ...this.state.infos };
    let detail = this.props.products.map((p, i) => ({
      quantity: p.quantity,
      food: p.id
    }));
    copy["details"] = detail;
    if (e.target.name === "zipcode") {
      copy[e.target.name] = Number(e.target.value);
    } else {
      copy[e.target.name] = e.target.value;
    }
    this.setState({ infos: copy });
    // console.log(this.state.infos);
  };

  createOrder = e => {
    e.preventDefault();
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/create-order",
        this.state.infos
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="input-group d-flex flex-sm-column">
          <h1>Your cart</h1>
          {!this.props.products.length && <p>no product selected yet...</p>}
          {Boolean(this.props.products.length) && (
            <div>
              <div>
                <h5 className="text-muted">Order details</h5>
                <table className="table table-borderless">
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
                        <td>
                          {this.props.foods.filter(f => f._id === p.id)[0].name}
                        </td>
                        <td>
                          {
                            this.props.foods.filter(f => f._id === p.id)[0]
                              .price
                          }

                          <span>$</span>
                        </td>
                        <td>
                          {this.props.foods.filter(f => f._id === p.id)[0]
                            .price * p.quantity}
                          <span>$</span>
                        </td>
                      </tr>
                    ))}
                    <td className="table-active" colSpan="4">
                      Total :
                      {[...this.props.products]
                        .map(
                          p =>
                            p.quantity *
                            this.props.foods.filter(f => f._id === p.id)[0]
                              .price
                        )
                        .reduce((prev, next) => prev + next)}
                      $
                    </td>
                  </tbody>
                </table>
              </div>
              <div>
                <h5 className="text-muted">Delivery information</h5>
                <div className="form-group">
                  <label htmlFor="address" className="form-group">
                    Address
                  </label>
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    placeholder="Enter your address"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipcode" className="form-group">
                    Zipcode
                  </label>
                  <input
                    name="zipcode"
                    type="text"
                    className="form-control"
                    placeholder="Enter your zipcode"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="information" className="form-group">
                    Information
                  </label>
                  <input
                    name="information"
                    type="text"
                    className="form-control"
                    placeholder="Any delivery information?"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div>
                <a
                  href="/myaccount"
                  className="btn btn-primary"
                  role="button"
                  aria-pressed="true"
                  onClick={this.createOrder}
                >
                  Validate your order
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
