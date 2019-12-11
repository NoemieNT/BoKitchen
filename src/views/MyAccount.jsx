import React, { Component } from "react";
import { useAuth } from "./../auth/UseAuth";

function MyAccount() {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) return null;

  return <div>my account: hello {currentUser.firstname}</div>;
}

export default MyAccount;
