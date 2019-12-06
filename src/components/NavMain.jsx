import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMain() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-md-0">
          <li className="nav-item active">
            <NavLink exact to="/">
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li className="nav-item">
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
