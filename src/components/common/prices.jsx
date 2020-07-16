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
      {
        price: "37",
        title: "Business Special Offer",
        service: [
          "Mobile-Optimized",
          "Free Custom Domain",
          "Best Hosting",
          "Outstanding Support",
          "Happy Customers",
          "Happy Customers",
        ],
        link: "#",
      },
      {
        price: "78",
        title: "Enterprise Best Option",
        service: [
          "Mobile-Optimized",
          "Free Custom Domain",
          "Best Hosting",
          "Outstanding Support",
          "Happy Customers",
        ],
        link: "#",
      },
    ],
  };
  render() {
    const { prices } = this.state;
    return (
      <React.Fragment>
        <div className="prices">
          {/* */}

          <div className="price-box-parent">
            <div className="price-box-parent-child">
              <div className="cnt1">
                <div className="cnt2">
                  {prices.map((price, index) => (
                    <div key={"price" + index} className="price-box">
                      <div className="price-box-left">
                        <div className="price-box-left-top">
                          <span className="price-box-left-top-span">
                            <sup>$</sup>
                            {price.price}
                          </span>
                        </div>
                        <div className="price-box-left-bottom">
                          <span>EVERY MONTH OR YEARLY</span>
                        </div>
                      </div>
                      <div className="price-box-right">
                        <div className="price-box-right-top">
                          <div className="cnt1">
                            <div className="cnt2 cnt-bottom">
                              <div className="price-box-right-top-box">
                                <h6>{price.title}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="price-box-right-middle">
                          <div className="cnt1">
                            <div className="cnt2 cnt-top">
                              <div className="price-box-right-middle-box">
                                <ul>
                                  {price.service.map((priceListItem) => (
                                    <li>{priceListItem}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="price-box-right-bottom">
                          <div className="cnt1">
                            <div className="cnt2 cnt-left">
                              <a href={price.link} className="read-more-btn">
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
