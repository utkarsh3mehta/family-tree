import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Member } from "./pages/member";
import { Auth } from "./pages/auth";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/" component={Home} />
        <Route exact path="/member/:memid" component={Member} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
