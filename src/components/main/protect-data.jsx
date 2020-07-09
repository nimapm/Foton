import React, { Component } from "react";

import style from "../../assets/css/_main.scss";

class ProtectedData extends Component {
  state = {
    title: "Protecting Data the Way It Was Intended ",
    description:
      "Quisque ac dolor nec nisl pellentesque ullamc. Vestibulum sed ultrices mi morbi dignissim.",
    link: "#",
  };
  render() {
    const { title, description, link } = this.state;
    return (
      <React.Fragment>
        <div className="protected-data">
          <div className="protected-data-bg">
            <div className="protected-data-bg-box">
              <div className="cnt1">
                <div className="cnt2">
                  <img
                    src={require("../../assets/images/background/layer-orange-right.png")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="protected-data-content">
            <div className="protected-data-content-box protected-left">
              <div className="cnt1">
                <div className="cnt2">
                  <div className="protected-data-box-left">
                    <div className="protected-data-cnt-top">
                      <h4>{title}</h4>
                    </div>
                    <div className="protected-data-cnt-middle">
                      <p>{description}</p>
                    </div>
                    <div className="protected-data-cnt-bottom">
                      <a href={link}>Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="protected-data-content-box protected-right">
              <div className="cnt1">
                <div className="cnt2">
                  <div className="protected-data-cnt-right-box">
                    <div className="cnt1">
                      <div className="cnt2">
                        <img
                          src={require("../../assets/images/elements/servers.png")}
                        />
                      </div>
                    </div>
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

export default ProtectedData;
