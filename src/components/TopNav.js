import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import PhoneIcon from "@material-ui/icons/Phone";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Badge from "@material-ui/core/Badge";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import "./topnav.css";
const TopNav = ({ handleClose }) => {
  const [fullWidth, setFullWidth] = useState(false);
  const searchClass = ["searching", "mt-1"];

  if (fullWidth) {
    searchClass.push("full_width");
  }
  return (
    <div className="topnav_wrapper">
      {/** MOBILE NAV  START      */}
      <div className="mobile_nav  ">
        <Container className="mobile_nav_container" fluid>
          <div className="logo_div">
            <Image
              src="/images/logo.png"
              alt="logo image"
              className="mobile_logo"
              fluid
            />
          </div>
          {/* <div className="mobile_nav_header mb-3 ">queens corner glam</div> */}
          <div className="search_div mb-3">
            <SearchRoundedIcon
              className="mobile_search_icon mx-1 m_ico"
              onClick={() => {
                setFullWidth(!fullWidth);
              }}
            />
            <Badge badgeContent={4} color="secondary">
              <FavoriteBorderOutlinedIcon className="mobile_search_icon mx-3 " />
            </Badge>
            <LocalMallOutlinedIcon className="mobile_search_icon mr-5 " />
            <MenuRoundedIcon
              className="burger mr-2"
              onClick={() => {
                handleClose(false);
              }}
            />
          </div>
        </Container>
        <div className={searchClass.join(" ")}>
          <input type="text" placeholder="search... " />
          <SearchRoundedIcon
            className="mobile_search_icon mr-1"
            style={{ color: "gold" }}
          />
        </div>
      </div>

      {/** MOBILE NAV  END      */}

      {/** DESKTOP NAV  START     */}

      <div className="desktop_nav">
        <div className="first_nav">
          <Container className="first_nav_container">
            <div className="contact d-flex">
              {/* <div className="email text-white">
                <EmailOutlinedIcon />{" "}
                <span>Slindile.mbatha@queenscornerglam.co.za</span>
              </div> */}
              <div className="email text-white ml-2">
                <PhoneIcon /> <span>065 972 4513</span>
              </div>
            </div>
            <div
              className="search"
              style={{
                background: "black",
              }}
            >
              <input
                type="text"
                placeholder="Search item...."
                style={{
                  background: "none",
                  outline: "none",
                  border: "none",
                  color: "white",
                  paddingLeft: "4px",
                }}
              />
              <SearchRoundedIcon
                className="mobile_search_icon mr-1"
                style={{ color: "gold" }}
              />
            </div>
            <div className="account_cart d-flex">
              <div className="account text-white">
                <AccountBoxIcon /> <span>Account</span>
              </div>
              <div className="account text-white ml-5">
                <LocalMallOutlinedIcon /> <span>My Shopping Bag</span>
              </div>
            </div>
          </Container>
        </div>
        <div
          className="second_nav"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Container
            className="w-10 "
            style={{
              width: "100%",
              height: "70%",
              display: "flex",
              alignItems: "center",
              // justifyContent: "space-around",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="logo image"
              className="mobile_logo py-2"
              fluid
            />
            <div className="desktop_nav_header mb-3 mx-auto ">
              queens corner glam
            </div>
          </Container>

          <div className="third_nav container">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Category</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Container className="topnav_container" fluid></Container>
    </div>
  );
};

export default TopNav;
