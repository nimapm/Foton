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
    callOut: {
      message:
        "Sophisticated, luxurious, and classic all at once, elegant fonts are more than capable of leaving a lasting impress…",
      icon: "fab fa-twitter",
      text: "Qode Interactive",
    },

    support: {
      text:
        "Quisque actraqum nunc no dolor sit ametaugue dolor. Lorem ipsum dolor sit amet, consyect etur.",
      leftButton: [require("../../assets/images/logo/apple-store.png"), "#"],
      rightButton: [require("../../assets/images/logo/google-play.png"), "#"],
    },
  };
  render() {
    const { logo, socialMedia, contacts, callOut, support } = this.state;
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
                    <a key={("footer-cnt", index)} href={social.link}>
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
            <div className="footer-content">
              <div className="footer-cnt">
                <h6>Contact Info</h6>
              </div>

              <div className="footer-cnt">
                {contacts.map((contact, index) => (
                  <div
                    key={("footer-contact-ways", index)}
                    className="footer-contact-ways"
                  >
                    <i className={contact.icon + "footer-address"}></i>
                    <p className="footer-address">{contact.text}</p>
                    <br />
                  </div>
                ))}
              </div>
            </div>
            <div className="footer-content">
              <div className="footer-cnt">
                <div className="footer-callout">
                  <p>{callOut.message}</p>
                </div>

                <div className="footer-cnt">
                  <div className="footer-callout-icon">
                    <div className="cnt1">
                      <div className="cnt2">
                        <i className={callOut.icon}></i>
                      </div>
                    </div>
                  </div>
                  <div className="footer-callout-text">
                    <p>{callOut.text}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content">
              <div className="footer-cnt">
                <h6>Support & Downloads</h6>

                <p className="footer-support">{support.text}</p>

                <div className="footer-support-centered">
                  <a href={support.leftButton[1]}>
                    <img src={support.leftButton[0]} />
                  </a>

                  <a href={support.rightButton[1]}>
                    <img src={support.rightButton[0]} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
