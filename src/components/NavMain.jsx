import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMain() {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav mr-auto mt-2 mt-md-0">
          <li className="nav-item active">
            <NavLink className="items" exact to="/">
              <div>
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                ></a>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="items" to="/menu">
              {" "}
              Menu{" "}
            </NavLink>
            <NavLink className="items" to="/cheackout">
              {" "}
              Checkout{" "}
            </NavLink>
            <NavLink className="items" to="/myaccount">
              {" "}
              My Account
            </NavLink>
            <NavLink className="items" to="/SignIn">
              {" "}
              Sign In{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
