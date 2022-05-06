import React from "react";
import { Switch, Route } from "react-router-dom";
import Detection from "../detection/detection";
import Pest from '../pest/pest'
import Home from '../home/home'
import Recommend from '../recommend/recommend'
import RecommendPest from '../recommend/recommendPest'

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact>
      <Home />
      </Route>
      <Route path="/Detection" >
      <Detection  />
      </Route>
      <Route path="/Pest" >
      <Pest  />
      </Route>
      <Route path="/product/herbiside" >
      <Recommend  />
      </Route>
      <Route path="/product/Insectiside" >
      <RecommendPest  />
      </Route>
    </Switch>
  );
};

export default Router;
