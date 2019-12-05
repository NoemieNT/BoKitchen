import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMain() {
  return (
    <nav className="nav-main">
      <NavLink exact to="/">
        home
      </NavLink>
      {/* <NavLink to="/all-students">all students</NavLink>
      <NavLink to="/all-cohorts">all cohorts</NavLink>
      <NavLink to="/create-student">+ student</NavLink>
      <NavLink to="/create-cohort">+ cohort</NavLink> */}
    </nav>
  );
}
