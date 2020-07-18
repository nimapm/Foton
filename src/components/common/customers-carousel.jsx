import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// images
import img1 from "../../assets/images/logo/mobile.png";
import img2 from "../../assets/images/logo/mobile.png";
import img3 from "../../assets/images/logo/mobile.png";
import img4 from "../../assets/images/logo/mobile.png";

class CustomersCarousel extends Component {
  state = {
    background: this.props.background,
    customersLogo: [
      "w.png",
      "aliqua.png",
      "dynamic.png",
      "i.png",
      "labore.png",
      "oceandor.png",
      "va.png",
      "vegan.png",
    ],
  };
  render() {
    const { background, customersLogo } = this.state;

    let classes = "customer-carousel-bg-img";
    if (!background) classes += "  carousel-bg-none";
    return (
      <React.Fragment>
        <div className="customers-carousel">
          <div className="customer-carousel-bg">
            <img
              src={require("../../assets/images/background/layer-blue-bottom.png")}
              className={classes}
            />
          </div>
          <div className="customers-carousel-content">
            <div className="cnt1">
              <div className="cnt2 cnt-center">
                <div className="customers-carousel-box">
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    items="5"
                    stagePadding={10}
                    autoplay
                    dots={false}
                  >
                    {customersLogo.map((customer, index) => (
                      <div key={("customer-carousel", index)} class="item">
                        <img
                          src={require("../../assets/images/logo/customers/" +
                            customer +
                            "")}
                        />
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomersCarousel;
