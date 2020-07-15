import React, { Component } from "react";

class DigitalAgency extends Component {
  state = {
    title: "Digital Agency Service Providers of Future",
    description:
      "Quisque ac dolor nec nisl pellentesque ullamc. Vestibulum sed ultrices mi morbi dignissim. ",
    link: "#",
  };
  render() {
    const { title, description, link } = this.state;
    return (
      <React.Fragment>
        <div className="digital-agency">
          <div className="digital-agency-bg">
            <div className="cnt1">
              <div className="cnt2">
                <img
                  src={require("../../assets/images/background/layer-cream-orange.png")}
                />
              </div>
            </div>
          </div>
          <div className="digitall-agency-content">
            <div className="digitall-agency-content-box agency-left">
              <div className="cnt1">
                <div className="cnt2">
                  <img
                    className="agency-shell"
                    src={require("../../assets/images/elements/shell.png")}
                  />
                </div>
              </div>
            </div>
            <div className="digitall-agency-content-box agency-right">
              <div className="cnt1">
                <div className="cnt2">
                  <div className="digital-agency-content-box-right">
                    <div className="digital-agency-content-box-right-top">
                      <h4>{title}</h4>
                    </div>
                    <div className="digital-agency-content-box-right-middle">
                      <p>{description}</p>
                    </div>
                  </div>

                  <div className="digital-agency-content-box-right-bottom">
                    <a href={link}>Read More</a>
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

export default DigitalAgency;
