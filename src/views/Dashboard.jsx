import React, { Component } from "react";
import DashboardContainer from "../components/DashboardContainer";
import OrderDetails from "../components/OrderDetails";

export class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <DashboardContainer />
          </div>
          <div className="col">
            <OrderDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
