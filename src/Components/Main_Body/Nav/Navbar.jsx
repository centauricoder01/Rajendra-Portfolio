import React, { useState } from "react";
import "./Navbar.css";
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const [classes, setclasses] = useState("donotshownavbar");
  return (
    <>
      <div className="Navbar_container">
        <nav>
          <h2
            className="logo"
            style={{
              color: "black",
              cursor: "pointer",
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              gap: "5px",
            }}
          >
            <img
              src={require("../../assets/me-about_.png")}
              alt="me"
              style={{
                borderRadius: "200rem",
                width: "2rem",
                height: "2rem",
              }}
            />
            <div>
              <span style={{ color: "#0c90c8" }}>R</span>AJENDR
              <span style={{ color: "#0c90c8" }}>A</span>
            </div>
          </h2>
          <ul className={classes}>
            <li>
              <a
                href="#home"
                onClick={() => {
                  setclasses("donotshownavbar");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => {
                  setclasses("donotshownavbar");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skill"
                onClick={() => {
                  setclasses("donotshownavbar");
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => {
                  setclasses("donotshownavbar");
                }}
              >
                Experience
              </a>
            </li>

            <li>
              <a
                href="#project"
                onClick={() => {
                  setclasses("donotshownavbar");
                }}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#Gihub"
                onClick={() => {
                  setclasses("donotshownavbar");
                }}
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => {
                  setclasses("donotshownavbar");
                }}
              >
                Contact
              </a>
            </li>
            {/* <li>
              <a
                download=""
                href={resume}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1tsf8_yX-smsdMvkjTbMdYPO7yIANDp-6/view?usp=sharing"
                  )
                }
              >
                Resume
              </a>
            </li> */}
            <ImCross
              className="crossicon commonIcon"
              onClick={() => {
                setclasses("donotshownavbar");
              }}
            />
          </ul>
          <ImMenu
            className="Menuicon commonIcon"
            onClick={() => {
              setclasses("shownavbar");
            }}
          />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
