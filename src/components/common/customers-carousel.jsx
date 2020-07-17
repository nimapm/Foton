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
  state = {};
  render() {
    return (
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        items="3"
        autoplay
        nav
        dots
        margin={10}
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
    );
  }
}

export default CustomersCarousel;
