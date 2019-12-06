import React, { Component } from "react";
import MapWrap from "../components/MapWrap";
import DelivererOrdersTable from "../components/DelivererOrdersTable";

export class Dashboard extends Component {
  render() {
    return (
      <div className="container">
      <h1>Welcome</h1>
        <div className="row">
          <div className="col">
          <MapWrap />
          </div>
          <div className="col">
          <DelivererOrdersTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
