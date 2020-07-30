import React, { Component } from "react";

import style from "../../assets/css/_main.scss";

class Unique extends Component {
  state = {
    title: "Smart and flexible",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis egestas ante, sed viverra nunc tincidunt nec. Integer non condimentum elit, sit amet feugiat lorem.",
    statistics: [
      { name: "HAPPY CLIENTS", score: "927" },
      { name: "HAPPY CLIENTS", score: "927" },
      { name: "HAPPY CLIENTS", score: "927" },
    ],
  };
  render() {
    const { title, description, statistics } = this.state;

    return (
      <React.Fragment>
        <div className="unique">
          <div className="unique-bg">
            <div className="unique-bg-box">
              <div className="unique-bg-text">
                <span>Unique</span>
              </div>
              <div className="unique-bg-image">
                <img
                  src={require("../../assets/images/background/layer-blue-left.png")}
                />
              </div>
            </div>
          </div>

          <div className="unique-content">
            <div className="unique-content-box">
              <div className="unique-content-box-child unique-left">
                <div className="cnt1">
                  <div className="cnt2">
                    <div className="unique-content-box-left-image">
                      <img
                        src={require("../../assets/images/elements/site.png")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="unique-content-box-child unique-right">
                <div className="cnt1">
                  <div className="cnt2">
                    <div className="unique-content-box-right-cnt">
                      <div className="unique-right-cnt-top">
                        <h4>{title}</h4>
                      </div>
                      <div className="unique-right-cnt-middle">
                        <p>{description}</p>
                      </div>
                      <div className="unique-right-cnt-bottom">
                        {statistics.map((s, index) => (
                          <div
                            key={
                              ("unique-right-cnt-bottom-statistics-parent",
                              index)
                            }
                            className="unique-right-cnt-bottom-statistics"
                          >
                            <div className="cnt1">
                              <div className="cnt2">
                                <div className="unique-right-cnt-bottom-statistics-box">
                                  <div className="unique-right-cnt-bottom-statistics-top">
                                    <span>{s.score}</span>
                                  </div>
                                  <div className="unique-right-cnt-bottom-statistics-bottom">
                                    <span>{s.name}</span>
                                  </div>
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Unique;
