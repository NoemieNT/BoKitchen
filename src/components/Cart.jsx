import React, { useState, useEffect, Component } from "react";
import { withRouter } from "react-router-dom";
import APIHandler from "./../api/handler";
import { useAuth } from "./../auth/UseAuth";

export default withRouter(function Cart({ products, foods, history }) {
  const { currentUser, isLoading } = useAuth();
  const [infos, setInfos] = useState({});

  const handleChange = e => {
    const copy = { ...infos };
    let detail = products.map((p, i) => ({
      quantity: p.quantity,
      food: p.id
    }));
    copy["customer"] = currentUser._id;
    copy["details"] = detail;
    if (e.target.name === "zipcode") {
      copy[e.target.name] = Number(e.target.value);
    } else {
      copy[e.target.name] = e.target.value;
    }
    setInfos(copy);
  };

  const createOrder = e => {
    e.preventDefault();
    APIHandler.post("/create-order", infos)
      .then(res => {
        console.log(res);
        history.push("/indelivery");
      })
      .catch(err => console.log(err));
  };

  if (isLoading || !currentUser) return null;

  return (
    <div>
      <div className="input-group d-flex flex-sm-column">
        <h1>Your cart</h1>
        {!products.length && <p>no product selected yet...</p>}
        {Boolean(products.length) && (
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
                  {products.map((p, i) => (
                    <tr key={i}>
                      <td>{p.quantity}</td>
                      <td>{foods.filter(f => f._id === p.id)[0].name}</td>
                      <td>
                        {foods.filter(f => f._id === p.id)[0].price}

                        <span>$</span>
                      </td>
                      <td>
                        {foods.filter(f => f._id === p.id)[0].price *
                          p.quantity}
                        <span>$</span>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="table-active" colSpan="4">
                      <div>
                        Total : $
                        {[...products]
                          .map(
                            p =>
                              p.quantity *
                              foods.filter(f => f._id === p.id)[0].price
                          )
                          .reduce((prev, next) => prev + next)}
                      </div>
                      <small className="text-muted">
                        Delivery fees : $2.50
                      </small>
                    </td>
                  </tr>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <a
                href="#"
                className="btn btn-primary"
                role="button"
                aria-pressed="true"
                onClick={createOrder}
              >
                Validate your order
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
