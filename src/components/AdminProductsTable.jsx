import React, { Component } from "react";

export default class ProductsTable extends Component {
  state = {
    infos: {}
  };

  handleBlur = e => {
    const copy = { ...this.state.infos };
    copy[e.target.id] = e.target.textContent;
    this.setState({ infos: copy });
  };

  render() {
    return (
      <div className="d-flex flex-wrap">
        <div className="d-flex flex-sm-wrap">
          {this.props.foods.map((food, i) => (
            <div className="col-md-4" id="foodbox">
              <div className="card mb-4 shadow-sm">
                <div className="card" key={i}>
                  <img
                    id="card-img"
                    src={food.picture}
                    className="card-img-top"
                    alt={food.name}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title"
                      contenteditable="true"
                      id="name"
                      onBlur={this.handleBlur}
                    >
                      {food.name}
                    </h5>
                    <p
                      className="card-text"
                      id="description"
                      contenteditable="true"
                      onBlur={this.handleBlur}
                    >
                      {food.description}
                    </p>
                    <p
                      className="card-text"
                      id="category"
                      contenteditable="true"
                      onBlur={this.handleBlur}
                    >
                      {food.category}
                    </p>
                    <span
                      className="card-text"
                      id="price"
                      contenteditable="true"
                      onBlur={this.handleBlur}
                    >
                      {food.price}
                    </span>
                    <span>$</span>
                    <p></p>
                    <button
                      className="btn btn-block btn-info"
                      onClick={e =>
                        this.props.handleEdit(food._id, this.state.infos)
                      }
                    >
                      Edit
                    </button>
                    <button
                      onClick={evt => this.props.handleDelete(food._id)}
                      className="btn btn-block" id="btn-manage"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
