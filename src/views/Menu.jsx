import React, { Component } from "react";
import ProductsTable from "../components/ProductsTable";
import Cart from "../components/Cart";
import FilterableProductsTable from "../components/FilterableProductsTable";
import exampleFood from "../data/exampleFood.json";
import axios from "axios";

export class Menu extends Component {
  state = {
    products: [],
    // foods: [...exampleFood],
    foods: []
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/foods")
      .then(res => {
        this.setState({ foods: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSelectedProducts = selectedProduct => {
    const copy = [...this.state.products];
    copy.push({
      index: selectedProduct.i,
      quantity: selectedProduct.input.quantity
    });
    this.setState({ products: copy }, () => {
      console.log(this.state.products);
    });
  };

  render() {
    return (
      <div class="container">
        <div className="row">
          <div className="col-md-2 order-md-1 d-none d-md-block bg-light sidebar">
            <FilterableProductsTable />
          </div>
          <div className="col-md-7 order-md-2">
            <ProductsTable
              productSelectionClbk={this.handleSelectedProducts}
              foods={this.state.foods}
            />
          </div>
          <div className="col-md-3 order-md-3">
            <Cart products={this.state.products} foods={this.state.foods} />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
