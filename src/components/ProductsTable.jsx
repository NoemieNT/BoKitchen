import React from "react";

export default function ProductsTable({ foods, handleDelete }) {
  return (
    <div>
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          {foods.map((food, i) => (
            <div className="card" key={i}>
              <img
                src={food.picture}
                className="card-img-top"
                alt="food picture"
              />
              <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">{food.description}</p>
                <p className="card-text">{food.price}$</p>
                {/* BOUTONS EDIT ET DELETE UNIQUEMENT SI ADMIN = EN ATTENTE DES PROTECTED ROUTE */}
                <button className="btn btn-primary">Edit</button>
                <button
                  onClick={evt => handleDelete(food._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
