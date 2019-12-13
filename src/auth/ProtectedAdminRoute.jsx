import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./UseAuth";

export const ProtectedAdminRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn, isLoading, currentUser } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  return currentUser && currentUser.role === "ADMIN" ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to="/SignIn" />
  );
};
