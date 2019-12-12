import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./UseAuth";

export const ProtectedDelivererRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn, isLoading, currentUser } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  return currentUser && currentUser.role === "DELIVERER" ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect to="/dashboard" />
  );
};
