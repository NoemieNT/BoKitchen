import React, { Component } from "react";

export default class CreateFood extends Component {
  state = {
    infos: {
      picture: "",
      name: "",
      description: "",
      category: "",
      tags: [],
      price: 0,
      Stock: 0,
      menu: false
    }
  };

  handleChange = e => {
    const copy = { ...this.state.infos };
    copy[e.target.name] = e.target.value;
    this.setState({ infos: copy });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.clbk(this.state.infos);
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-9 order-md-2">
          <h3 className="form-title">Add food to the menu</h3>
          <div className="form-group">
            <label for="name" className="form-group">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="ex: burger"
            />
          </div>
          <div className="form-group">
            <label for="description" className="label">
              Description
            </label>
            <input
              name="description"
              type="text"
              className="form-control"
              placeholder="Type a description"
            />
          </div>
          <div className="form-group">
            <label for="stock" className="label">
              Stock
            </label>
            <input
              name="stock"
              type="number"
              className="form-control"
              placeholder="ex: 10"
              min="1"
            />
          </div>
          <div className="form-group">
            <label for="price" className="label">
              Price
            </label>
            <input
              name="price"
              type="number"
              className="form-control"
              placeholder="ex: 15"
              min="1"
            />
          </div>
          <div className="form-group">
            <label for="picture" className="label">
              Picture
            </label>
            <input name="picture" type="file" className="form-control " />
          </div>
          <div className="form-group">
            <label for="category" className="label">
              Main category
            </label>
            <select name="category" className="form-control" required>
              <option value="-1" disabled selected>
                Choose a category
              </option>
              <option value="men">Starter</option>
              <option value="women">Main</option>
              <option value="kids">Dessert</option>
              <option value="kids">Drink</option>
            </select>
          </div>

          <div className="form-group">
            <label for="tags" className="label">
              Tags
            </label>
            <select name="category" className="form-control">
              <option value="-1" disabled selected>
                Choose a tag
              </option>
            </select>
          </div>
          <button className="submit">Add to collection</button>
        </div>
        <div className="col-md-3 order-md-2 mb-4">
          <div className="add-tag-form">
            <h3 className="form-title">Add tags</h3>
            <div className="form-group">
              <label for="tag" className="form-group">
                Tag
              </label>
              <input
                name="tag"
                type="text"
                className="form-control"
                placeholder="ex: Bio"
              />
            </div>
            <button className="submit">Create this tag</button>
          </div>
        </div>
      </div>
    );
  }
}
