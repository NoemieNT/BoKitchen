import React, { Component } from "react";

export class FoodBox extends Component {
  state = { quantity: 0 };

  handleChange = e => {
    this.setState({ quantity: Number(e.target.value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.clbk(this.state.quantity);
  };

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card">
              <img
                src={this.props.food.image}
                className="card-img-top"
                alt={this.props.food.name}
              />
              <div className="card-body">
                <h5 className="card-title">{this.props.food.name}</h5>
                <p className="card-text">{this.props.food.description}</p>
                <p className="card-text">{this.props.food.price}$</p>
                <div className="control">
                  <input className="input" type="number" name="quantity" />
                  <button>update qty</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default FoodBox;
