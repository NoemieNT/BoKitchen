import React, { Component } from "react";
import FoodBox from "../components/FoodBox";
import GeneralTable from "../components/GeneralTable";
import ProductsTable from "../components/ProductsTable";
export class Menu extends Component {
  render() {
    return (
      <div>
        <GeneralTable />
      </div>
    );
  }
}

export default Menu;
