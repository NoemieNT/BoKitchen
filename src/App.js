import React from "react";
import { Switch, Route } from "react-router-dom";
// import the views
import Home from "./views/Home";
import StudentsTable from "./views/StudentsTable";
import StudentCreate from "./views/StudentCreate";
import CohortsTable from "./views/CohortsTable";
import CohortCreate from "./views/CohortCreate";
// import component (view partials)
import NavMain from "./components/NavMain";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/all-students" component={StudentsTable} />
        <Route path="/all-cohorts" component={CohortsTable} />
        <Route path="/create-student" component={StudentCreate} />
        <Route path="/create-cohort" component={CohortCreate} />
      </Switch>
    </div>
  );
}

export default App;
