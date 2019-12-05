import React from "react";
import { Switch, Route } from "react-router-dom";
// import the views
import Home from "./views/Home";
import Cart from "./views/Cart";
import Dashboard from "./views/Dashboard";
import Menu from "./views/Menu";
import MyAccount from "./views/MyAccount";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

// import component (view partials)
import NavMain from "./components/NavMain";
import FoodBox from "./components/FoodBox";
import Account from "./components/Account";
import CreateFoodBox from "./components/CreateFoodBox";
import GeneralTable from "./components/GeneralTable";
import ProductsTable from "./components/ProductsTable";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <React.Fragment>
      <header id="header-main">
        <NavMain />
        <SearchBar />
      </header>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/menu" component={Menu} />
          <Route path="/myaccount" component={MyAccount} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
