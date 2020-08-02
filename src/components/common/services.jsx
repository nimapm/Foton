import React, { Component } from "react";

import style from "../../assets/css/_common.scss";

class Services extends Component {
  state = {
    services: [
      {
        icon: "far fa-comment-dots",
        title: "Great Advice",
        description: " Eam animal cons incorupte, deserun et princip deos de.",
      },
      {
        icon: "fas fa-headphones-alt",
        title: "Great Advice",
        description: " Eam animal cons incorupte, deserun et princip deos de.",
      },
      {
        icon: "far fa-thumbs-up",
        title: "Great Advice",
        description: " Eam animal cons incorupte, deserun et princip deos de.",
      },
      {
        icon: "fas fa-chart-pie",
        title: "Great Advice",
        description: " Eam animal cons incorupte, deserun et princip deos de.",
      },
    ],
  };
  render() {
    const { services } = this.state;

    return (
      <div className="services">
        <div className="cnt1">
          <div className="cnt2">
            <div className="services-child">
              <div className="cnt1">
                <div className="cnt2">
                  {services.map((service) => (
                    <div className="services-content">
                      <div className="services-content-cnt">
                        <div className="cnt1">
                          <div className="cnt2">
                            <i className={service.icon + " services-icon"}></i>
                          </div>
                        </div>
                      </div>

                      <div className="services-content-cnt">
                        <div className="cnt1">
                          <div className="cnt2">
                            <h6 className="services-h6">{service.title}</h6>
                          </div>
                        </div>
                      </div>

                      <div className="services-content-cnt">
                        <div className="cnt1">
                          <div className="cnt2">
                            <p className="services-p">{service.description}</p>
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
    );
  }
}

export default Services;
