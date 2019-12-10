import React, { Component } from "react";
import axios from "axios";

export class FilterableProductsTable extends Component {
  state = { tags: [] };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/all-tags")
      .then(res => {
        this.setState({ tags: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Filter</h2>
        <div className="input-group d-flex flex-sm-column">
          <h5>Category</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="category"
              value="STARTER"
            />
            <label className="form-check-label" htmlFor="category">
              Starter
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="category"
              value="MAIN"
            />
            <label className="form-check-label" htmlFor="category">
              Main
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="category"
              value="DESSERT"
            />
            <label className="form-check-label" htmlFor="category">
              Dessert
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="category"
              value="DRINK"
            />
            <label className="form-check-label" htmlFor="category">
              Drink
            </label>
          </div>
        </div>
        <br></br>
        <div className="input-group d-flex flex-sm-column">
          <h5>Tags</h5>
          {this.state.tags.map((tag, i) => (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="tags"
                value={tag._id}
              />
              <label className="form-check-label" htmlFor="tags">
                {tag.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterableProductsTable;
