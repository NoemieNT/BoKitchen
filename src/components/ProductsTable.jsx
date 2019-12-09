import React, { useState, useEffect } from "react";
import exampleFood from "../data/exampleFood.json";
import FoodBox from "./FoodBox";

const ProductsTable = props => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(exampleFood);
  }, []);

  const handleQuantityChange = (index, qty) => {
    // console.log("coucou", foods, index, qty);
    const copy = [...foods];
    copy[index].quantity = qty;
    setFoods(copy);
  };

  return (
    <div>
      {foods.map((f, i) => (
        <FoodBox key={i} food={f} clbk={qty => handleQuantityChange(i, qty)} />
      ))}
    </div>
  );
};

export default ProductsTable;
