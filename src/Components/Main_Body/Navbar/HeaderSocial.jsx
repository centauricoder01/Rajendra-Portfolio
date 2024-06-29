import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://github.com/centauricoder01"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "1.9rem", margin: "3px", color: "black" }}
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/rajendra01/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "1.9rem", margin: "3px", color: "#0077B5" }}
      >
        <BsLinkedin />
      </a>
      <a
        href="https://twitter.com/itsrpatel"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "1.9rem", margin: "3px", color: "#1DA1F2" }}
      >
        <img
          src={require("../../assets/x-logo.png")}
          alt="x logo"
          style={{ width: "1.4rem" }}
        />
      </a>
      <a
        href="https://leetcode.com/u/centauricoder/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "1.9rem", margin: "3px", color: "#f5b300" }}
      >
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocial;
