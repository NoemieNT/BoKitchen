import React from "react";

export default function DelivererOrderRow() {
  return (
    <tr>
      <th scope="row">
        <input
          className="form-check-input"
          type="checkbox"
          id="filter-status"
          name="status"
          value="VALIDATED"
        />
      </th>
      <td>ID de la commande</td>
      <td>Adresse de livraison</td>
      <td>ZIPCODE livraison</td>
      <td>Heure commande + 30 min</td>
    </tr>
  );
}
