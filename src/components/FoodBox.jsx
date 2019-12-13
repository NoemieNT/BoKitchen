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
          <div className="card" id="foodbox">
            <img
              id="card-img"
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="100"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              src={this.props.food.picture}
              alt={this.props.food.name}
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.food.name}</h5>
              <p className="card-text">{this.props.food.description}</p>
              <p className="card-text">{this.props.food.price}$</p>
              <div className="control">
                <input
                  id={this.props.food._id}
                  className="form-control"
                  type="number"
                  name="quantity"
                  min="0"
                  onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FoodBox;

{
  /* 
  
    <div class="card-body">
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            Edit
          </button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
 */
}
