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
  };
  render() {
    // const { background } = this.props;

    let classes = "customer-carousel-bg-img";
    if (!this.state.background) classes += "  carousel-bg-none";
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
                    items="4"
                    stagePadding={10}
                    autoplay
                    dots={false}
                  >
                    <div class="item">
                      <img src={img1} />
                    </div>

                    <div class="item">
                      <img src={img2} />
                    </div>

                    <div class="item">
                      <img src={img3} />
                    </div>

                    <div class="item">
                      <img src={img4} />
                    </div>

                    <div class="item">
                      <img src={img1} />
                    </div>

                    <div class="item">
                      <img src={img2} />
                    </div>

                    <div class="item">
                      <img src={img3} />
                    </div>

                    <div class="item">
                      <img src={img4} />
                    </div>
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
