import React, { Component } from "react";

export class CreateFoodBox extends Component {
  state = {
    infos: { image: "", name: "", description: "" }
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
      <div>
        <form
          className="createFoodBox"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <label className="label" htmlFor="image">
            Image
          </label>
          <input className="input" id="image" name="image" type="text" />
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
          <button className="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateFoodBox;
