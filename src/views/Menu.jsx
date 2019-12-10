import React, { Component } from "react";
import ProductsTable from "../components/ProductsTable";
import Cart from "../components/Cart";
import FilterableProductsTable from "../components/FilterableProductsTable";
import exampleFood from "../data/exampleFood.json";

export class Menu extends Component {
  //props dans cart (i et qty)
  state = {
    products: [],
    foods: [...exampleFood]
  };

  handleSelectedProducts = selectedProduct => {
    console.log("finally !!!", selectedProduct);
    const copy = [...this.state.products];
    copy.push({ id: selectedProduct.id, qty: selectedProduct.input.quantity });
    this.setState({ products: copy }, () => {
      console.log(this.state.products);
    });
  };

  //FILTERS

  render() {
    return (
      <div class="container">
        <div className="row">
          <div className="col-md-2 order-md-1 d-none d-md-block bg-light sidebar">
            <FilterableProductsTable />
          </div>
          <div className="col-md-8 order-md-2">
            <ProductsTable
              productSelectionClbk={this.handleSelectedProducts}
              foods={this.state.foods}
            />
          </div>
          <div className="col-md-2 order-md-3">
            <Cart products={this.state.products} />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
