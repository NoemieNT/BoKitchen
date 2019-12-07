import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsTable from "../components/ProductsTable";
import CreateFood from "../components/CreateFood";

const AdminMenu = props => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/foods")
      .then(res => {
        setFoods(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deleteFood = input => {
    axios
      .delete(process.env.REACT_APP_BACKEND_URL + "/delete-food/" + input)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const createFood = infos => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/create-food", infos)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <div>
        <CreateFood clbk={createFood} />
      </div>
      <div>
        <ProductsTable foods={foods} handleDelete={deleteFood} />
      </div>
    </div>
  );
};
export default AdminMenu;
