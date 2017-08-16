import React from "react";
import { render } from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import Home from "./containers/Home";
import reducer from "./reducers";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(logger));

const Root = () =>
  <Router>
    <Provider store={store}>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Provider>
  </Router>;

render(<Root />, document.getElementById("root"));
