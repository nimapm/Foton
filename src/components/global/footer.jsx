import React, { Component } from "react";

// imports
import style from "../../assets/css/_global.scss";

class Footer extends Component {
  state = {
    logo: require("../../assets/images/logo/logo.png"),
    socialMedia: [
      { logo: "fab fa-twitter", link: "#" },
      { logo: "fab fa-facebook-f", link: "#" },
      { logo: "fab fa-linkedin-in", link: "#" },
    ],
    contacts: [
      { icon: "fas fa-map-marker-alt ", text: "113 Fulton Street, Suite 721" },
      { icon: "fas fa-thumbtack ", text: "New York, NY 10010" },
      { icon: "fas fa-envelope ", text: "youremail@yourdomain.com" },
      { icon: "fas fa-phone ", text: "+88 (0) 101 0000 000" },
    ],
  };
  render() {
    const { logo, socialMedia, contacts } = this.state;
    return (
      <div className="footer">
        <div className="cnt1">
          <div className="cnt2">
            <div className="footer-content">
              <div className="footer-cnt">
                <img src={logo} />
              </div>
              <div className="footer-cnt">
                <p>
                  Lorem ipsum dolor sit amet, consy ect etur adipisc de elit.
                  Quisque act raqum nunc no dolor sit de amet.
                </p>
              </div>
              <div className="footer-cnt">
                <div className="footer-cnt">
                  {socialMedia.map((social, index) => (
                    <a href={social.link}>
                      <div className="social-icons">
                        <div className="cnt1">
                          <div className="cnt2">
                            <i class={social.logo}></i>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer-content">
              <div className="footer-cnt">
                <h6>Contact Info</h6>
              </div>

              <div className="footer-cnt">
                {/* <i className="fas fa-map-marker-alt footer-address"></i>
                <p className="footer-address">113 Fulton Street, Suite 721</p> */}
                {contacts.map((contact, index) => (
                  <div className="footer-contact-ways">
                    <i className={contact.icon + "footer-address"}></i>
                    <p className="footer-address">{contact.text}</p>
                    <br />
                  </div>
                ))}
              </div>
            </div>
            <div className="footer-content"></div>
            <div className="footer-content"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
