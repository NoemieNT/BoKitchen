import React from "react";
import DelivererOrderRow from "./DelivererOrderRow";

export default function DelivererOrdersTable() {
  return (
    <div>
      <table class="table table-striped table-responsive{-sm|-md|-lg|-xl}">
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
          <DelivererOrderRow />
        </tbody>
      </table>
    </div>
  );
}
