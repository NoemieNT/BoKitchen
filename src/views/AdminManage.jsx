import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminProductsTable from "../components/AdminProductsTable";
import AdminSidebar from "../components/AdminSidebar";
import SearchBar from "../components/SearchBar";

const AdminManage = props => {
  const [foods, setFoods] = useState([]);
  const [currentFood, setcurrentFood] = useState([]);

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
      .then(res => {
        {
          console.log(res);
          setFoods(foods.filter(f => f._id !== res.data._id));
        }
      })
      .catch(err => console.log(err));
  };

  const editFood = (id, input) => {
    axios
      .patch(process.env.REACT_APP_BACKEND_URL + "/edit-food/" + id, input)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handleSearch = input => {
    console.log(input);
    console.log(currentFood);
    let filtered = foods.filter(f =>
      f.name.toLowerCase().includes(input.toLowerCase())
    );
    setcurrentFood(filtered);
  };

  return (
    <div className="container">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-8 order-md-2">
          <SearchBar clbk={handleSearch} />
          <AdminProductsTable
            foods={currentFood.length ? currentFood : foods}
            handleDelete={deleteFood}
            handleEdit={editFood}
          />
        </div>
      </div>
    </div>
  );
};
export default AdminManage;
