import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMain() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-md-0">
          <li class="nav-item active">
            <NavLink exact to="/">
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/menu"> Menu </NavLink>
            <NavLink to="/cart"> Cart </NavLink>
            <NavLink to="/myaccount"> My Account</NavLink>
            <NavLink to="/SignIn"> Sign In </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
