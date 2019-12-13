import React from "react";
import FormatHeure from "./../components/FormatHeure";

export default function DelivererOrdersTable({ validatedOrders, handleClick }) {
  return (
    <div className="table-responsive-sm">
      <table className="table table-striped table-responsive{-sm|-md|-lg|-xl}">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Order</th>
            <th scope="col">Address</th>
            {/* <th scope="col">Zipcode</th> */}
            <th scope="col">Heure limite de livraison</th>
          </tr>
        </thead>
        <tbody>
          {!validatedOrders.length ? (
            <tr>
              <td colspan="5">Sorry, there is no order in this zone</td>
            </tr>
          ) : (
            validatedOrders.map((validatedOrders, i) => (
              <tr key={i}>
                <th scope="row">
                  <a
                    id="deliveryChoice"
                    href="/indelivery"
                    onClick={evt => handleClick(validatedOrders._id)}
                  >
                    Take this order
                  </a>
                </th>
                <td>{validatedOrders._id.slice(0, 7)}</td>
                <td>
                  {validatedOrders.address} {validatedOrders.zipcode}
                </td>
                {/* <td>{validatedOrders.zipcode}</td> */}
                <td>
                  <FormatHeure date={validatedOrders.date} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
