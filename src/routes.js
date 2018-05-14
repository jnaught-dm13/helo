import React from "react";
import { Switch, Route } from "react-router-dom";

// Component imports
import Auth from "./component/Auth/Auth";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Post from "./component/Post/Post";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/Form" component={Form} />
    <Route path="/Post" component={Post} />
  </Switch>
);
