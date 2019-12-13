import React, { Component } from "react";
import ProductsTable from "../components/ProductsTable";
import Cart from "../components/Cart";
import FilterableProductsTable from "../components/FilterableProductsTable";
import APIHandler from "./../api/handler";

export class Menu extends Component {
  state = {
    products: [],
    foods: [],
    filteredFoods: [],
    category: [],
    tags: []
  };

  componentDidMount() {
    APIHandler.get("/foods")
      .then(res => {
        this.setState({ foods: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSelectedProducts = selectedProduct => {
    const copy = [...this.state.products];
    const isAlreadyInProducts = this.state.products
      .map((p, i) => p.id)
      .includes(selectedProduct.input.id);

    if (!isAlreadyInProducts) {
      if (selectedProduct.input.quantity !== 0) {
        copy.push({
          index: selectedProduct.i,
          quantity: selectedProduct.input.quantity,
          id: selectedProduct.input.id
        });
        this.setState({ products: copy }, () => {});
      }
    } else {
      let existingLine = this.state.products.filter(
        element => element.id === selectedProduct.input.id
      );
      existingLine[0].quantity = selectedProduct.input.quantity;
      if (selectedProduct.input.quantity !== 0) {
        copy.push(existingLine[0]);
      }
      copy.splice(existingLine.indexOf(selectedProduct.i), 1);
      this.setState({ products: copy });
    }
  };

  setFilterProduct = input => {
    const copy = [...this.state[input.name]];

    if (copy.includes(input.value)) copy.splice(copy.indexOf(input.value), 1);
    else copy.push(input.value);

    this.setState({ [input.name]: copy }, () => {
      this.state.foods.forEach((f, i) => {
        const catOk = this.state.category.includes(f.category);

        const tagsOk =
          this.state.tags.reduce((acc, t, i) => {
            if (f.tags.includes(t)) acc++;
            return acc;
          }, 0) > 0;

        if (catOk || tagsOk) {
          const copy = [...this.state.filteredFoods];

          const isAlreadyInFiltered = Boolean(
            copy.filter(ff => ff._id === f._id).length
          );

          if (!isAlreadyInFiltered) {
            copy.push(f);
            this.setState({ filteredFoods: copy });
          }
        } else {
          const copy = [...this.state.filteredFoods];
          const needle = copy.filter(ff => ff._id === f._id)[0];
          if (needle) {
            const index = copy.indexOf(needle);
            copy.splice(index, 1);
            this.setState({ filteredFoods: copy });
          }
        }
      });
    });
  };

  render() {
    return (
      <div className="container container-menu">
        <div className="row row-menu">
          <div
            id="filter-table"
            className="filter-table col-md-2 order-md-1 d-none d-md-block sidebar"
          >
            <FilterableProductsTable productFilter={this.setFilterProduct} />
          </div>
          <div id="filterable-product-table" className="col-md-7 order-md-2">
            <ProductsTable
              productSelectionClbk={this.handleSelectedProducts}
              foods={
                this.state.filteredFoods.length
                  ? this.state.filteredFoods
                  : this.state.foods
              }
            />
          </div>
          <div className="col-md-3 order-md-3">
            <Cart
              products={this.state.products.length ? this.state.products : []}
              foods={this.state.foods}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
