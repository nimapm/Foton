import React, { Component } from "react";

// imports
import style from "../../assets/css/_global.scss";
import { headerHider } from "./../../assets/js/global";

class Header extends Component {
  state = {
    logo: require("../../assets/images/logo/logo.png"),
    navItems: [
      { text: "Home", link: "#" },
      { text: "Pages", link: "#" },
      { text: "Portfolio", link: "#" },
      { text: "Blog", link: "#" },
      { text: "Shop", link: "#" },
      { text: "Elements", link: "#" },
    ],
  };

  render() {
    headerHider();

    const { logo, navItems } = this.state;

    return (
      <header>
        <div className="header-normal">
          <div className="header-content">
            <div className="header-main-logo">
              <div className="cnt1">
                <div className="cnt2 cnt-center">
                  <img className="main-logo" src={logo} />
                </div>
              </div>
            </div>
          </div>
          <div className="header-content">
            <div className="header-main-navigation">
              <div className="cnt1">
                <div className="cnt2">
                  <ul className="main-nav">
                    {navItems.map((nav, index) => (
                      <a key={"nav" + index} href={nav.link}>
                        <li>{nav.text}</li>
                      </a>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header-content">
            <div className="header-main-icons">
              <div className="cnt1">
                <div className="cnt2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 21"
                  >
                    <defs></defs>
                    <path
                      class="search-1"
                      d="M21.5,19.3h0l-4.669-4.667a9.007,9.007,0,1,0-1.389,1.388l4.67,4.669a0.991,0.991,0,0,0,.694.29,0.985,0.985,0,0,0,.98-0.984A0.978,0.978,0,0,0,21.5,19.3ZM16.838,9A7.033,7.033,0,1,1,9.8,1.967,7.043,7.043,0,0,1,16.838,9Z"
                    ></path>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path
                        class="open-box"
                        d="M35,40H5c-2.8,0-5-2.2-5-5V5c0-2.8,2.2-5,5-5h30c2.8,0,5,2.2,5,5v30C40,37.8,37.8,40,35,40z"
                      ></path>
                    </g>
                    <path
                      class="open-lines"
                      d="M28,21H12c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v0C29,20.6,28.6,21,28,21z"
                    ></path>
                    <path
                      class="open-lines"
                      d="M28,16H12c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v0C29,15.6,28.6,16,28,16z"
                    ></path>
                    <path
                      class="open-lines"
                      d="M28,26H12c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v0C29,25.6,28.6,26,28,26z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/** the search box */}
          <div className="main-search-box">
            <div className="main-search-box-content">
              <div className="cnt1">
                <div className="cnt2 cnt-right">
                  <svg
                    className="search-box-search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 21"
                  >
                    <defs></defs>
                    <path
                      class="search-1"
                      d="M21.5,19.3h0l-4.669-4.667a9.007,9.007,0,1,0-1.389,1.388l4.67,4.669a0.991,0.991,0,0,0,.694.29,0.985,0.985,0,0,0,.98-0.984A0.978,0.978,0,0,0,21.5,19.3ZM16.838,9A7.033,7.033,0,1,1,9.8,1.967,7.043,7.043,0,0,1,16.838,9Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="main-search-box-content">
              <div className="cnt1">
                <div className="cnt2 cnt-left">
                  <input
                    placeholder="TYPE YOUR SEARCH ..."
                    className="search-box-input"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="main-search-box-content">
              <div className="cnt1">
                <div className="cnt2 cnt-left">
                  <svg
                    className="search-box-close-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <g>
                      <path
                        class="st0"
                        d="M35,0H5C2.2,0,0,2.2,0,5v30c0,2.8,2.2,5,5,5h30c2.8,0,5-2.2,5-5V5C40,2.2,37.8,0,35,0z M27.1,25.7l-1.4,1.4
		L20,21.4l-5.7,5.7l-1.4-1.4l5.7-5.7l-5.7-5.7l1.4-1.4l5.7,5.7l5.7-5.7l1.4,1.4L21.4,20L27.1,25.7z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header"></div>
      </header>
    );
  }
}

export default Header;
