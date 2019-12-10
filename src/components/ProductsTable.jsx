import React, { useState, useEffect } from "react";
import FoodBox from "./FoodBox";

const ProductsTable = props => {
  const [foods, setFoods] = useState(props.foods);
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   console.log("food has been updated", foods);
  //   const filtered = foods.filter(f => f.quantity > 0);
  //   props.productSelectionClbk(filtered);
  // }, [foods]); // a chaque fois que foods change, cet effect est reexec

  const handleQuantityChange = input => {
    const copy = [...cart, input];
    setCart(copy); // action async
    props.productSelectionClbk(cart);
  };

  return (
    <div>
      {foods.map((f, i) => (
        <FoodBox key={i} food={f} clbk={handleQuantityChange} />
      ))}
    </div>
  );
};

export default ProductsTable;
