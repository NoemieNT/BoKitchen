import React, { useState, useEffect } from "react";
import FoodBox from "./FoodBox";

const ProductsTable = props => {
  const handleQuantityChange = (i, input) => {
    props.productSelectionClbk({
      id: i,
      input
    });
  };

  return (
    <div className="d-flex flex-wrap">
      <div className="d-flex flex-sm-wrap">
        {props.foods.map((f, i) => (
          <FoodBox
            key={i}
            food={f}
            clbk={input => handleQuantityChange(i, input)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsTable;
