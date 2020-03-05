import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Main as MainLayout, Profile as ProfileLayout } from "./layouts";

import { Home as HomeView, Profile as ProfileView } from "./views";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/"
      />
      <RouteWithLayout
        component={ProfileView}
        exact
        layout={ProfileLayout}
        path="/profile"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
