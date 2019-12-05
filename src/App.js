import React from "react";
import { Switch, Route } from "react-router-dom";
// import the views
import Home from "./views/Home";
// import component (view partials)
import NavMain from "./components/NavMain";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
