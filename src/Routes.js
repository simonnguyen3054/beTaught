import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Main as MainLayout } from "./layouts";

import { Home as HomeView } from "./views";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
