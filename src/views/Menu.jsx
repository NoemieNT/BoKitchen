import React, { Component } from "react";
import ProductsTable from "../components/ProductsTable";
import Cart from "../components/Cart";
import FilterableProductsTable from "../components/FilterableProductsTable";
import exampleFood from "../data/exampleFood.json";

export class Menu extends Component {
  //props dans cart (i et qty)
  state = {
    products: [],
    foods: [exampleFood]
  };

  handleSelectedProducts = selectedProducts => {
    console.log("finally !!!", selectedProducts);
    this.setState({ products: selectedProducts });
  };

  //FILTERS

  render() {
    return (
      <div>
        <ProductsTable
          productSelectionClbk={this.handleSelectedProducts}
          foods={this.state.foods}
        />
        <Cart products={this.state.products} />
        <FilterableProductsTable />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form onSubmit={this.handleFormSubmit}>
                <button className="btn btn-default" type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
