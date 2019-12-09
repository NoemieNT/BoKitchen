import React from "react";

export default function ProductsTable({ foods, handleDelete, handleEdit }) {
  return (
    <div className="d-flex flex-wrap">
      <div className="d-flex flex-sm-wrap">
        {foods.map((food, i) => (
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="card" key={i}>
                <img
                  src={food.picture}
                  className="card-img-top"
                  alt={food.name}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    contenteditable="true"
                    id="name"
                    onBlur={handleEdit}
                  >
                    {food.name}
                  </h5>
                  <p
                    className="card-text"
                    id="description"
                    contenteditable="true"
                    onBlur={handleEdit}
                  >
                    {food.description}
                  </p>
                  <p
                    className="card-text"
                    id="price"
                    contenteditable="true"
                    onBlur={handleEdit}
                  >
                    {food.price}$
                  </p>
                  <button
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={evt => handleDelete(food._id)}
                    className="btn btn-primary"
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
