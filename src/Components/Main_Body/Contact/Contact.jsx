import React, { useState } from "react";
import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

import contactimg from "./fourth.webp";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Contact = () => {
  const [getdata, setgetData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // **************   React Model  ************************

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  //  **********************************

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setgetData({
      ...getdata,
      [name]: value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setgetData({
      name: "",
      email: "",
      message: "",
    });
    handleClick();
  };

  return (
    <section id="contact">
      <h2 style={{ color: "black", fontWeight: "900", fontSize: "2rem" }}>
        <span style={{ color: "#0c90c8" }}>Contact</span> Me
      </h2>
      <div className="container contact_container">
        <div className="contactimg">
          <img src={contactimg} alt="contactimg" />
        </div>
        <div className="contactform">
          <div className="SocialButton">
            <button
              className="contactButton"
              onClick={() =>
                window.open("https://www.linkedin.com/in/rajendra01/")
              }
            >
              {" "}
              <BsLinkedin /> Linkedin
            </button>

            <button
              className="contactButton"
              onClick={() => window.open("https://github.com/centauricoder01")}
            >
              <FaGithub /> Github
            </button>
            <button
              className="contactButton"
              onClick={() => window.open("https://x.com/itsrpatel")}
            >
              <img
                src={require("../../assets/x-logo.png")}
                style={{ width: "1rem" }}
                alt="x"
              />{" "}
            </button>
          </div>
          <form
            action="#"
            onSubmit={HandleSubmit}
            name="submit-to-google-sheet"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={getdata.name}
              onChange={HandleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={getdata.email}
              onChange={HandleChange}
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              value={getdata.message}
              onChange={HandleChange}
              required
            ></textarea>
            <button type="submit" className="submitButton">
              Send Message
            </button>
          </form>
        </div>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Message sent successfully!!
          </Alert>
        </Snackbar>
      </div>
      <footer>
        <div className="footer_copyright">
          <p>
            Designed and Build by <b>Rajendra Patel</b> , Copyright © 2024
            rpatel.tech
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
