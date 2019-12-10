import React, { Component } from "react";
import axios from "axios";

export class FilterableProductsTable extends Component {
  state = { allTags: [], category: [], tags: [] };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/all-tags")
      .then(res => {
        this.setState({ allTags: res.data });
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
              onChange={e => this.props.productFilter(e.target)}
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
              onChange={e => this.props.productFilter(e.target)}
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
              onChange={e => this.props.productFilter(e.target)}
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
              onChange={e => this.props.productFilter(e.target)}
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
          {this.state.allTags.map((tag, i) => (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="tags"
                value={tag._id}
                onChange={e => this.props.productFilter(e.target)}
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
