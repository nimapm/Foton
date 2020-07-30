import React, { Component } from "react";

// page components
import Intro from "./main/intro";
import Secure from "./main/secure";
import DigitalAgency from "./main/digital-agency";
import MainServices from "./main/main-services";
import Unique from "./main/unique";
import ProtectedData from "./main/protect-data";
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
        <ProtectedData />
        <Prices />
        <CustomersCarousel background={true} />
      </React.Fragment>
    );
  }
}

export default Main;
