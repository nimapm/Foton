import React, { Component } from "react";

import style from "../../assets/css/_common.scss";

class Prices extends Component {
  state = {
    prices: [
      {
        price: "19",
        title: "Personal Good Price",
        service: [
          "Mobile-Optimized",
          "Free Custom Domain",
          "Best Hosting",
          "Outstanding Support",
          "Happy Customers",
        ],
        link: "#",
      },
      { price: "13", title: "", service: ["", "", "", ""], link: "#" },
      { price: "14", title: "", service: ["", "", "", ""], link: "#" },
    ],
  };
  render() {
    const { prices } = this.state;
    return (
      <React.Fragment>
        <div className="prices">
          <div className="cnt1">
            <div className="cnt2">
              {/* */}

              <div className="price-box">
                <div className="price-box-left">
                  <div className="price-box-left-top">
                    <span className="price-box-left-top-span">
                      <sup>$</sup>
                      {prices[0].price}
                    </span>
                  </div>
                  <div className="price-box-left-bottom">
                    <span>EVERY MONTH OR YEARLY</span>
                  </div>
                </div>
                <div className="price-box-right">
                  <div className="price-box-right-top">
                    <div className="cnt1">
                      <div className="cnt2">
                        <div className="price-box-right-top-box">
                          <h6>{prices[0].title}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price-box-right-middle">
                    <div className="cnt1">
                      <div className="cnt2">
                        <div className="price-box-right-middle-box">
                          <ul>
                            <li>Mobile-Optimized</li>
                            <li>Free Custom Domain</li>
                            <li>Best Hosting</li>
                            <li>Outstanding Support</li>
                            <li>Happy Customers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price-box-right-bottom">
                    <div className="cnt1">
                      <div className="cnt2 cnt-left">
                        <a href="#" className="read-more-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Prices;
