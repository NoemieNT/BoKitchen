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
      <div>
        {this.props.food.map((food, i) => (
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card" key={i}>
                <img
                  src={food.image}
                  className="card-img-top"
                  alt={food.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{food.name}</h5>
                  <p className="card-text">{food.description}</p>
                  <p className="card-text">{food.price}$</p>
                  <div className="control">
                    <input
                      id={food.name}
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
        ))}
      </div>
    );
  }
}
export default FoodBox;
