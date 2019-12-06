import React from "react";

export default function DelivererOrdersTable({ validatedOrders }) {
  return (
    <div>
      <table className="table table-striped table-responsive{-sm|-md|-lg|-xl}">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Order</th>
            <th scope="col">Address</th>
            <th scope="col">Zipcode</th>
            <th scope="col">Heure limite de livraison</th>
          </tr>
        </thead>
        <tbody>
          {!validatedOrders.length ? (
            <tr>
              <td colspan="5">No order to display</td>
            </tr>
          ) : (
            validatedOrders.map((validatedOrders, i) => (
            <tr key={i}>
              <th scope="row">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="filter-status"
                  name="status"
                  value="VALIDATED"
                />
              </th>
              <td>{validatedOrders._id}</td>
              <td>{validatedOrders.address}</td>
              <td>{validatedOrders.zipcode}</td>
              <td>{validatedOrders.date}</td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
}
