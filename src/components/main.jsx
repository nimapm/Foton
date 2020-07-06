import React, { Component } from "react";

// page components
import Intro from "./main/intro";
import Secure from "./main/secure";

class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Intro />
        <Secure />
      </React.Fragment>
    );
  }
}

export default Main;
