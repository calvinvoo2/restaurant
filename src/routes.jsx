import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Home from "./components/App";
import RestaurantDetail from "./components/RestaurantDetail";
import AppBar from "material-ui/AppBar";
export const renderRoutes = () => (
  <HashRouter>
    <MuiThemeProvider>
      <div>
        <AppBar
          title="Top 10 Restaurants"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          showMenuIconButton={false}
          style={{ backgroundColor: "#00B140" }}
          titleStyle={{ fontSize: 20 }}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurant/:slug" component={RestaurantDetail} />
        </Switch>
      </div>
    </MuiThemeProvider>
  </HashRouter>
);
