import React from "react";
import FormatHeure from "./../components/FormatHeure";

export default function AdminOrdersTable({ orders }) {
  return (
    <div>
      <table className="table table-striped table-responsive{-sm|-md|-lg|-xl}">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Order</th>
            <th scope="col">Address</th>
            <th scope="col">Zipcode</th>
            {/* <th scope="col">Heure limite de livraison</th> */}
            {/* total price */}
          </tr>
        </thead>
        <tbody>
          {!orders.length ? (
            <tr>
              <td colspan="5">No order to display</td>
            </tr>
          ) : (
            orders.map((orders, i) => (
              <tr key={i}>
                <td>{orders.status}</td>
                <td>{orders._id.slice(0, 7)}</td>
                <td>{orders.address}</td>
                <td>{orders.zipcode}</td>
                {/* <td>
                  <FormatHeure date={orders.date} />
                </td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
