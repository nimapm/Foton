// base
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// imports
import logo from "./logo.svg";

// global component
import Header from "./components/global/header";
import Footer from "./components/global/footer";

// views {Pages}
import Main from "./components/main";
import About from "./components/about";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/about" component={About}></Route>
        <Route path="/" component={Main}></Route>
        <Redirect to="/not-found"></Redirect>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
