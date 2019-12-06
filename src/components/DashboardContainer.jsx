import React, { Component } from "react";
import MapWrap from "./MapWrap";
import Checkboxes from "./Checkboxes";
import DelivererOrdersTable from "./DelivererOrdersTable";

export class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <MapWrap />
        <DelivererOrdersTable />
      </div>
    );
  }
}

export default DashboardContainer;
