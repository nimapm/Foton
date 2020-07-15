import React, { Component } from "react";

import style from "../../assets/css/_main.scss";

class Intro extends Component {
  state = {
    title: "Untapped Potential",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aperiam asperiores natus eius pariatur ",
    buttons: {
      leftBtn: ["Read More", "#"],
      rightBtn: ["Contact us", "#"],
    },
  };
  render() {
    const { title, description, buttons } = this.state;
    return (
      <React.Fragment>
        <div className="main-container">
          <div className="main-container-bg">
            <div className="main-container-bg-child">
              <img
                className="container-bg"
                src={require("../../assets/images/background/layer-orange.png")}
              />

              <img
                className="container-bg"
                src={require("../../assets/images/background/layer-cream.png")}
              />

              <img
                className="container-bg"
                src={require("../../assets/images/background/layer-blue.png")}
              />
            </div>
          </div>
          <div className="main-container-bg-items">
            <div className="main-container-bg-items-child">
              <img
                className="container-element"
                src={require("../../assets/images/elements/cloud.png")}
              />
              <img
                className="container-element"
                src={require("../../assets/images/elements/wifi.png")}
              />
              <img
                className="container-element"
                src={require("../../assets/images/elements/message.png")}
              />
              <img
                className="container-element"
                src={require("../../assets/images/elements/coins.png")}
              />
              <img
                className="container-element"
                src={require("../../assets/images/elements/person.png")}
              />
              <img
                className="container-element"
                src={require("../../assets/images/elements/secure.png")}
              />
              <img
                className="container-element"
                src={require("../../assets/images/elements/wallet.png")}
              />
              <img
                className="container-element"
                src={require("../../assets/images/elements/laptop.png")}
              />
            </div>
          </div>
          <div className="main-container-content">
            <div className="cnt1">
              <div className="cnt2">
                <div className="main-container-box">
                  <div className="main-container-box-title">
                    <h1>{title}</h1>
                  </div>
                  <div className="main-container-box-description">
                    <p>{description}</p>
                  </div>
                  <div className="main-container-box-buttons">
                    <a href={buttons.leftBtn[1]}>{buttons.leftBtn[0]}</a>
                    <a href={buttons.rightBtn[1]}>{buttons.rightBtn[0]}</a>
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

export default Intro;
