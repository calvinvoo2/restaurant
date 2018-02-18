import React from "react";
import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Home from "./components/App";
import RestaurantDetail from "./components/RestaurantDetail";

export const renderRoutes = () => (
  <HashRouter>
    <MuiThemeProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/restaurant/:slug" component={RestaurantDetail} />
      </Switch>
    </MuiThemeProvider>
  </HashRouter>
);
