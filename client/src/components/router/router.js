import React from "react";
import { Switch, Route } from "react-router-dom";
import Detection from "../detection/detection";
import Home from '../home/home'

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact>
      <Home />
      
      </Route>
      <Route path="/Detection" >
      <Detection  />
      </Route>
    </Switch>
  );
};

export default Router;
