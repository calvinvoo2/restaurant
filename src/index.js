import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

import { renderRoutes } from "./routes.jsx";
const initialState = {
  lang: "en"
};

const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));
const routeComponent = renderRoutes();
ReactDOM.render(
  <Provider store={store}>{routeComponent}</Provider>,
  document.getElementById("app")
);

module.hot.accept();
