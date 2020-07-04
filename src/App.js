import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import logo from "./logo.svg";

import Main from "./components/main";

function App() {
  return (
    <React.Fragment>
      <div className="bun">
        <Switch>
          <Route path="/" component={Main}></Route>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
