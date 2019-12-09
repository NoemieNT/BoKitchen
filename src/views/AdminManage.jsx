import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminProductsTable from "../components/AdminProductsTable";
import AdminSidebar from "../components/AdminSidebar";
import exampleFood from "../data/exampleFood.json";

const AdminManage = props => {
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
      .delete(process.env.REACT_APP_BACKEND_URL + "/delete-food/" + input, {
        new: true
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const editFood = (id, input) => {
    axios
      .patch(process.env.REACT_APP_BACKEND_URL + "/edit-food/" + id, input)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div class="container">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-8 order-md-2">
          <AdminProductsTable
            foods={foods}
            handleDelete={deleteFood}
            handleEdit={editFood}
          />
        </div>
      </div>
    </div>
  );
};
export default AdminManage;
