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

    return (
      <React.Fragment>
        <div className="customers-carousel">
          <div className="customer-carousel-bg">
            <img
              src={require("../../assets/images/background/layer-blue-bottom.png")}
            />
          </div>
        </div>
      </React.Fragment>

      // <OwlCarousel
      //   className="owl-theme"
      //   loop
      //   nav
      //   items="5"
      //   autoplay
      //   nav
      //   dots
      //   margin={10}
      // >
      //   <div class="item">
      //     <img src={img1} />
      //   </div>

      //   <div class="item">
      //     <img src={img2} />
      //   </div>

      //   <div class="item">
      //     <img src={img3} />
      //   </div>

      //   <div class="item">
      //     <img src={img4} />
      //   </div>

      //   <div class="item">
      //     <img src={img1} />
      //   </div>

      //   <div class="item">
      //     <img src={img2} />
      //   </div>

      //   <div class="item">
      //     <img src={img3} />
      //   </div>

      //   <div class="item">
      //     <img src={img4} />
      //   </div>
      // </OwlCarousel>
    );
  }
}

export default CustomersCarousel;
