import React, { Component } from "react";
import MapWrap from "./MapWrap";
import Checkboxes from "./Checkboxes";
import DelivererOrdersTable from "./DelivererOrdersTable";

export class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to your dashboard</h1>
        <MapWrap />
        <DelivererOrdersTable />
      </div>
    );
  }
}

export default DashboardContainer;
