import React, { useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import APIHandler from "./../api/handler";
import UserContext from "./../auth/UserContext";
import { useAuth } from "./../auth/UseAuth";

export default withRouter(function NavMain(props) {
  const userContext = useContext(UserContext);
  const { setCurrentUser } = userContext;
  const { currentUser } = useAuth();

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

  return !currentUser || currentUser.role === "CUSTOMER" ? (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg">
        {/* <ul className="navbar-nav mr-auto mt-2 mt-md-0"> */}
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="navbar-brand" exact to="/">
              <div>
                <img id="logo" src="./lemon.png" alt="logo"></img>
              </div>
            </NavLink>
            {/* </li>
          <li className="nav-item"> */}
            <NavLink className="items" to="/menu">
              Menu
            </NavLink>
            <NavLink className="item-sign" to="/SignIn">
              Sign In
            </NavLink>
            <span className="item-signout" onClick={handleSignout}>
              Sign Out
            </span>
          </li>
        </ul>
      </nav>
    </div>
  ) : (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="navbar-brand" exact to="/ ">
              <div>
                <img id="logo" src="./lemon.png" alt="logo"></img>
              </div>
            </NavLink>

            <span className="item">Hello {currentUser.firstname}</span>
            <NavLink className="item-sign" to="/SignIn">
              Sign In
            </NavLink>

            <span className="item-signout" onClick={handleSignout}>
              Sign Out
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
});
