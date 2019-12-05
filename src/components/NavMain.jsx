import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMain() {
  return (
    <nav className="nav-main">
      <NavLink exact to="/">
        home
      </NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/cart"> Cart </NavLink>
      <NavLink to="/myaccount">My Account</NavLink>
      <NavLink to="/SignIn">Sign In</NavLink>
    </nav>
  );
}
