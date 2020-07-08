import React, { Component } from "react";

import style from "../../assets/css/_main.scss";

class MainServices extends Component {
  state = {
    title: "Open-source services",
    description:
      "Used alone or in an integrated manner, our premium open-source services cover all of your data infrastructure needs. and much more.",
    services: [
      {
        image: require("../../assets/images/logo/hat.png"),
        name: "WPBakery Page Builder",
      },

      {
        image: require("../../assets/images/logo/elemntor.png"),
        name: "Elementor Page Builder",
      },

      {
        image: require("../../assets/images/logo/css.png"),
        name: "No Coding Required",
      },

      {
        image: require("../../assets/images/logo/refresh.png"),
        name: "Slider Revolution",
      },

      {
        image: require("../../assets/images/logo/ninja.png"),
        name: "Woo Commerce",
      },

      {
        image: require("../../assets/images/logo/mobile.png"),
        name: "Fully Responsive",
      },

      {
        image: require("../../assets/images/logo/jet.png"),
        name: "Fully Responsive",
      },

      {
        image: require("../../assets/images/logo/a.png"),
        name: "Two Free Plugins",
      },
    ],
  };
  render() {
    const { title, description, services } = this.state;
    return (
      <React.Fragment>
        <div className="main-services">
          <div className="main-services-top">
            <div className="cnt1">
              <div className="cnt2">
                <div className="main-services-top-box">
                  <h3 className="main-services-title">{title}</h3>
                  <p className="main-services-description">{description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-services-bottom">
            <div className="main-services-bottom-box">
              <div className="cnt1">
                <div className="cnt2">
                  <div className="main-services-bottom-box-child">
                    {services.map((service, index) => (
                      <div className="main-services-cnt">
                        <div className="main-services-cnt-left">
                          <div className="cnt1">
                            <div className="cnt2">
                              <img
                                className="main-services-cnt-right-img"
                                src={service.image}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="main-services-cnt-right">
                          <div className="cnt1">
                            <div className="cnt2">
                              <p className="main-services-cnt-right-p">
                                {service.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainServices;
