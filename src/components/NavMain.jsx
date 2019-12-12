import React, { useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import APIHandler from "./../api/handler";
import UserContext from "./../auth/UserContext";

export default withRouter(function NavMain(props) {
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;

  // go go go
  const handleSignout = async () => {
    try {
      const x = await APIHandler.get("/logout");
      setCurrentUser(null);
    } catch (err) {
      console.error(err);
    } finally {
      props.history.push("/signin");
    }
  };

  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav mr-auto mt-2 mt-md-0">
          <li className="nav-item active">
            <NavLink className="items" exact to="/">
              {" "}
              <img
                className="burgerIcon"
                src="https://freeiconshop.com/wp-content/uploads/edd/burger-flat.png"
                alt="burger"
              />{" "}
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
            <span onClick={handleSignout}>signout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
});
