import React, { Component } from "react";

import ContainerImageRight from "./common/containers/c-img-right";
import Services from "./common/services";

class About extends Component {
  state = {};

  render() {
    return (
      <div>
        <ContainerImageRight background={true} />
        <Services />
      </div>
    );
  }
}

export default About;
