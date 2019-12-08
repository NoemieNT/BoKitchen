import React, { Component } from "react";
import ProductsTable from "../components/ProductsTable";
import exampleFood from "../data/exampleFood.json";
import FilterableProductsTable from "../components/FilterableProductsTable";

export class Menu extends Component {
  render() {
    return (
      <div>
        <ProductsTable />
      </div>
    );
  }
}

export default Menu;
