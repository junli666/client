import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import Thunk from "redux-thunk";

const container = document.getElementById("root");
const root = createRoot(container);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(Thunk)));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
