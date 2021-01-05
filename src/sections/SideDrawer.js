import React from "react";
import "./sidedrawer.css";

const SideDrawer = ({ menuClose, handleClose }) => {
  const drawerClass = ["side_drawer_container"];

  if (menuClose) {
    drawerClass.push("closeMenu");
  }

  return (
    <div className={drawerClass.join(" ")}>
      <div className="closeIcon">
        <i
          class="fas fa-window-close    "
          onClick={() => {
            handleClose(true);
          }}
        ></i>
        {/* <CloseIcon
          onClick={() => {
            handleClose(true);
          }}
        /> */}
      </div>
      <div className="drawer_nav">
        <nav>
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Category
              </a>
              >
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Our Queens
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleClose(true);
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
