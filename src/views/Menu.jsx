import React, { Component } from "react";
import FoodBox from "../components/FoodBox";
import GeneralTable from "../components/GeneralTable";
import ProductsTable from "../components/ProductsTable";
import exampleFood from "../data/exampleFood.json";
export class Menu extends Component {
  render() {
    return (
      <div>
        <GeneralTable />
        <FoodBox />
        <ProductsTable />
      </div>
    );
  }
}

export default Menu;
