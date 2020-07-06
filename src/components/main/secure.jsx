import React, { Component } from "react";

import style from "../../assets/css/_main.scss";

class Secure extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="main-secure">
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
          <div className="main-secure-content"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Secure;
