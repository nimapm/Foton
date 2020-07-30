import React, { Component } from "react";

// imports
import style from "../../assets/css/_global.scss";

class SideBar extends Component {
  state = {
    sidebarTop: {
      title: "Support & Downloads",
      description:
        "Quisque actraqum nunc no dolor sit ametaugue dolor. Lorem ipsum dolor sit amet, consyect etur adipiscing elit.",
      images: [
        {
          image: require("../../assets/images/logo/google-play-colored.png"),
          link: "#",
        },
        {
          image: require("../../assets/images/logo/apple-store-colored.png"),
          link: "#",
        },
      ],
    },
    sidebarMiddle: [
      { icon: "fas fa-map-marker-alt ", text: "113 Fulton Street, Suite 721" },
      { icon: "fas fa-thumbtack ", text: "New York, NY 10010" },
      { icon: "fas fa-envelope ", text: "youremail@yourdomain.com" },
      { icon: "fas fa-phone ", text: "+88 (0) 101 0000 000" },
    ],

    socialMedia: [
      { logo: "fab fa-twitter", link: "#" },
      { logo: "fab fa-facebook-f", link: "#" },
      { logo: "fab fa-linkedin-in", link: "#" },
    ],
  };
  render() {
    const { sidebarTop, sidebarMiddle, socialMedia } = this.state;
    return (
      <div className="side-bar">
        <div className="side-bar-exit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            x="0px"
            y="0px"
            viewBox="0 0 40 40"
            className="side-bar-close"
          >
            <g>
              <path
                className="st0"
                d="M35,0H5C2.2,0,0,2.2,0,5v30c0,2.8,2.2,5,5,5h30c2.8,0,5-2.2,5-5V5C40,2.2,37.8,0,35,0z M27.1,25.7l-1.4,1.4
		L20,21.4l-5.7,5.7l-1.4-1.4l5.7-5.7l-5.7-5.7l1.4-1.4l5.7,5.7l5.7-5.7l1.4,1.4L21.4,20L27.1,25.7z"
              ></path>
            </g>
          </svg>
        </div>

        <div className="side-bar-content-parent">
          <div className="side-bar-content">
            <div className="side-bar-cnt">
              <h6>{sidebarTop.title}</h6>
            </div>
            <div className="side-bar-cnt">
              <p>{sidebarTop.description}</p>
            </div>
            <div className="side-bar-cnt">
              {sidebarTop.images.map((image, index) => (
                <a key={("side-bar-cnt-a", index)} href={image.link}>
                  <img src={image.image} />
                </a>
              ))}
            </div>
            <div className="side-bar-cnt">
              <p className="side-bar-mid-p">Contact Info</p>
              {sidebarMiddle.map((contact, index) => (
                <div
                  key={("sidebar-contact-ways-div", index)}
                  className="sidebar-contact-ways  "
                >
                  <i
                    className={
                      contact.icon + "sidebar-address side-bar-contact"
                    }
                  ></i>
                  <p className="sidebar-address">{contact.text}</p>
                  <br />
                </div>
              ))}
            </div>
            <div className="side-bar-cnt">
              <span className="side-bar-follow-us">Follow Us</span>
            </div>
            <div className="side-bar-cnt">
              {socialMedia.map((social, index) => (
                <a key={("side-bar-social-icons", index)} href={social.link}>
                  <div className="social-icons">
                    <div className="cnt1">
                      <div className="cnt2">
                        <i className={social.logo}></i>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
