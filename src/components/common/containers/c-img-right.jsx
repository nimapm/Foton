import React, { Component } from "react";

import style from "../../../assets/css/_common.scss";

class ContainerImageRight extends Component {
  state = {};
  render() {
    let classes = "c-img-right-bg-img";
    if (!this.props.background) classes += " img-none";
    return (
      <div className="c-img-right">
        <div className="c-img-right-bg">
          <img
            className={classes}
            src={require("../../../assets/images/background/container-bg.jpg")}
          />
        </div>
        <div className="c-img-right-content c-img-right-normal">
          <div className="c-img-right-content-left">
            <div className="cnt1">
              <div className="cnt2">
                <div className="c-img-right-content-left-cnt">
                  <h2>
                    Company <br /> Growth Strategy
                  </h2>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, con sectetu adipiscing elit. In
                    sagittis egestas ante, sed viverra nunc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="c-img-right-content-right">
            <div className="cnt1">
              <div className="cnt2">
                <div className="c-img-right-content-right-cnt">
                  <div className="cnt1">
                    <div className="cnt2">
                      <img
                        src={require("../../../assets/images/elements/about-us.png")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-img-right-content c-img-right-responsive">
          <div className="c-img-right-content-right">
            <div className="cnt1">
              <div className="cnt2">
                <div className="c-img-right-content-right-cnt">
                  <div className="cnt1">
                    <div className="cnt2 cnt-top">
                      <img
                        src={require("../../../assets/images/elements/about-us.png")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="c-img-right-content-left">
            <div className="cnt1">
              <div className="cnt2">
                <div className="c-img-right-content-left-cnt">
                  <h2>
                    Company <br /> Growth Strategy
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, con sectetu adipiscing elit. In
                    sagittis egestas ante, sed viverra nunc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerImageRight;
