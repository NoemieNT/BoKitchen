import React, { Component } from "react";
import axios from "axios";

export default class CreateFood extends Component {
  // state = {
  //   infos: {
  //     picture: "",
  //     name: "",
  //     description: "",
  //     category: "",
  //     tags: [],
  //     price: 0,
  //     Stock: 0,
  //     menu: false
  //   }
  // };

  state = { infos: { menu: false }, tags: [], newTag: {} };

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

  handleTagChange = e => {
    const copy = { ...this.state.newTag };
    copy[e.target.name] = e.target.value;
    this.setState({ newTag: copy });
  };

  createTag = e => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/create-tag",
        this.state.newTag
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    const copy = { ...this.state.infos };
    if (e.target.name === "stock" || e.target.name === "price") {
      copy[e.target.name] = Number(e.target.value);
    } else {
      copy[e.target.name] = e.target.value;
    }
    this.setState({ infos: copy });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.clbk(this.state.infos);
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-8 order-md-2">
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="picture" className="label">
              Picture
            </label>
            <input
              name="picture"
              type="text"
              className="form-control "
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="category" className="label">
              Main category
            </label>
            <select
              name="category"
              className="form-control"
              onChange={this.handleChange}
            >
              <option value="-1" disabled selected>
                Choose a category
              </option>
              <option value="STARTER">Starter</option>
              <option value="MAIN">Main</option>
              <option value="DESSERT">Dessert</option>
              <option value="DRINK">Drink</option>
            </select>
          </div>

          <div className="form-group">
            <label for="tags" className="label">
              Tags
            </label>
            <select
              name="tags"
              className="form-control"
              onChange={this.handleChange}
            >
              <option value="-1" disabled selected>
                Choose a tag
              </option>
              {this.state.tags.map((tag, i) => (
                <option key={i} value={tag._id}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>
          <button className="submit" onClick={this.handleSubmit}>
            Add to collection
          </button>
        </div>

        <div className="col-md-4  order-md-2 mb-4">
          <div className="add-tag-form">
            <h3 className="form-title">Add tags</h3>
            <div className="form-group">
              <label for="tag" className="form-group">
                Tag
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="ex: Bio"
                onChange={this.handleTagChange}
              />
            </div>
            <button className="submit" onClick={this.createTag}>
              Create this tag
            </button>
          </div>
        </div>
      </div>
    );
  }
}
