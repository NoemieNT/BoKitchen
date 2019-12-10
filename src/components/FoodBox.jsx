import React, { Component } from "react";

export class FoodBox extends Component {
  state = {};

  handleChange = e => {
    this.setState({ quantity: Number(e.target.value), id: e.target.id });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.clbk(this.state);
  };

  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <div className="card">
            <img
              src={this.props.food.picture}
              className="card-img-top"
              alt={this.props.food.name}
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.food.name}</h5>
              <p className="card-text">{this.props.food.description}</p>
              <p className="card-text">{this.props.food.price}$</p>
              <div className="control">
                <input
                  id={this.props.food._id}
                  className="input"
                  type="number"
                  name="quantity"
                  min="1"
                  onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>update qty</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FoodBox;
