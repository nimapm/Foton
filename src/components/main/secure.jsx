import React, { Component } from "react";

import style from "../../assets/css/_main.scss";

class Secure extends Component {
  state = {
    title: "Accessing your \ndata like never before",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis egestas ante, sed viverra nunc tincidunt nec nteger nonsed condimntum elit, sit amet feugiat lorem. Proin tempus sagittis velit vitae scelerisque.",
    image: require("../../assets/images/elements/mobile-robot.png"),
    personName: "Erin Boettcher",
    personTitle: "Web Developer",
  };
  render() {
    const { title, description, image, personName, personTitle } = this.state;

    return (
      <React.Fragment>
        <div className="main-secure">
          <div className="main-secure-bg">
            <div className="main-secure-bg-child">
              <div className="main-secure-bg-text">
                <span>Secure</span>
              </div>
              <div className="main-secure-bg-img">
                <img
                  src={require("../../assets/images/background/layer-blue-right.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="main-secure-content">
            <div className="main-secure-content-box secure-left">
              <div className="cnt1">
                <div className="cnt2">
                  <div className="main-secure-left-child-box">
                    <div className="main-secure-left-top">
                      <h4>{title}</h4>
                    </div>
                    <div className="main-secure-left-middle">
                      <p>{description}</p>
                    </div>
                    <div className="main-secure-left-bottom">
                      <div className="main-secure-left-bottom-box">
                        <div className="main-secure-left-bottom-box-left">
                          <img
                            src={require("../../assets/images/elements/man.png")}
                          />
                        </div>
                        <div className="main-secure-left-bottom-box-right">
                          <div className="cnt1">
                            <div className="cnt2">
                              <p>{personName}</p>
                              <p>{personTitle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-secure-content-box secure-right">
              <div className="cnt1">
                <div className="cnt2">
                  <img className="secure-img" src={image} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Secure;
