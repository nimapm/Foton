import React, { Component } from "react";

import style from "../../assets/css/_main.scss";

class RightSided extends Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    link: this.props.link,

    background: this.props.background,
    imageLayer: this.props.imageLayer,
  };
  render() {
    const { title, description, link, background, imageLayer } = this.state;
    return (
      <React.Fragment>
        <div className="protected-data">
          <div className="protected-data-bg">
            <div className="protected-data-bg-box">
              <div className="cnt1">
                <div className="cnt2">
                  <img src={background} />
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
                        <img src={imageLayer} />
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

export default RightSided;
