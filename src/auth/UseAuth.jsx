import { useState, useEffect, useContext } from "react";
import APIHandler from "../api/handler";
import UserContext from "./UserContext";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const userContext = useContext(UserContext);
  const { setCurrentUser, currentUser } = userContext;

  useEffect(() => {
    APIHandler.get("/is-loggedin")
      .then(res => {
        console.log(res.data);
        setIsLoggedIn(true);
        setIsLoading(false);
        setCurrentUser(res.data);
      })
      .catch(err => {
        setCurrentUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
      });
  }, [setCurrentUser]);

  return { isLoggedIn, isLoading, currentUser };
};
