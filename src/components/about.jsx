import React, { Component } from "react";

import ContainerImageRight from "./common/containers/c-img-right";
import Services from "./common/services";
import RightSided from "./common/right-side-image";

class About extends Component {
  state = {};

  render() {
    return (
      <div>
        <ContainerImageRight background={true} />
        <Services />
        <RightSided
          title="Quisque Posuere Libero Sit Amet"
          description="Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram."
          link="#"
          background={require("../assets/images/background/about-us-bg1.jpg")}
          imageLayer={null}
        />
      </div>
    );
  }
}

export default About;
