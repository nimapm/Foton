import React, { Component } from "react";

// page components
import Intro from "./main/intro";
import Secure from "./main/secure";
import DigitalAgency from "./main/digital-agency";
import MainServices from "./main/main-services";
import Unique from "./main/unique";

import RightSided from "./common/right-side-image";
import Prices from "./common/prices";
import CustomersCarousel from "./common/customers-carousel";

class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Intro />
        <Secure />
        <DigitalAgency />
        <MainServices />
        <Unique />
        <RightSided
          title="Protecting Data the Way It Was Intended"
          description="Quisque ac dolor nec nisl pellentesque ullamc. Vestibulum sed ultrices mi morbi dignissim."
          link="#"
          background={require("../assets/images/background/layer-orange-right.png")}
          imageLayer={require("../assets/images/elements/servers.png")}
        />
        <Prices />
        <CustomersCarousel background={true} />
      </React.Fragment>
    );
  }
}

export default Main;
