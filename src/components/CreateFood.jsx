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
      <form
        className="addFoodBox"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <label className="label" htmlFor="picture">
          Picture
        </label>
        <input className="input" id="picture" name="picture" type="text" />
        <label className="label" htmlFor="name">
          Name
        </label>
        <input className="input" id="name" name="name" type="text" />
        <label className="label" htmlFor="description">
          Description
        </label>
        <input
          className="input"
          id="description"
          name="description"
          type="text"
        />
        <label className="label" htmlFor="categorie">
          Categorie
        </label>
        <input
          className="input"
          id="categorie"
          name="categorie"
          type="select"
        />
        <button className="submit">Submit</button>
      </form>
    );
  }
}
