import React, { useState, useEffect } from "react";
import exampleFood from "../data/exampleFood.json";
import FoodBox from "./FoodBox";

const ProductsTable = props => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(exampleFood);
  }, []);

  useEffect(() => {
    console.log("food has been updated", foods);
    const filtered = foods.filter(f => f.quantity > 0);
    props.productSelectionClbk(filtered);
  }, [foods]); // a chaque fois que foods change, cet effect est reexec

  const handleQuantityChange = (index, qty) => {
    console.log(index, qty);
    const copy = [...foods];
    copy[index].quantity = qty;
    setFoods(copy); // action async
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
