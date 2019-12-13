import React, { useState, useEffect } from "react";
import APIHandler from "./../api/handler";
import AdminProductsTable from "../components/AdminProductsTable";
import AdminSidebar from "../components/AdminSidebar";
import SearchBar from "../components/SearchBar";
import { useAuth } from "./../auth/UseAuth";
import { Redirect } from "react-router-dom";

const AdminManage = props => {
  const { currentUser } = useAuth();
  const [foods, setFoods] = useState([]);
  const [currentFood, setcurrentFood] = useState([]);

  useEffect(() => {
    APIHandler.get("/foods")
      .then(res => {
        setFoods(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deleteFood = input => {
    APIHandler.delete("/delete-food/" + input)
      .then(res => {
        {
          console.log(res);
          setFoods(foods.filter(f => f._id !== res.data._id));
        }
      })
      .catch(err => console.log(err));
  };

  const editFood = (id, input) => {
    APIHandler.patch("/edit-food/" + id, input)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handleSearch = input => {
    let filtered = foods.filter(f =>
      f.name.toLowerCase().includes(input.toLowerCase())
    );
    setcurrentFood(filtered);
  };

  if (!currentUser) return null;

  return currentUser.role === "ADMIN" ? (
    <div className="container">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-8 order-md-2" id="admin-manage-container">
          <SearchBar clbk={handleSearch} />
          <AdminProductsTable
            foods={currentFood.length ? currentFood : foods}
            handleDelete={deleteFood}
            handleEdit={editFood}
          />
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/dashboard" />
  );
};
export default AdminManage;
