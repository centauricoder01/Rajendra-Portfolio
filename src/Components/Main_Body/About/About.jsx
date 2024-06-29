import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";
import aboutimg from "../../assets/aboutimg.webp";

const About = () => {
  return (
    <section id="about">
      <h2 style={{ fontWeight: "bolder", fontSize: "2rem", color: "black" }}>
        All About <span style={{ color: "#0c90c8" }}>Me</span>
      </h2>
      <div className="mainaboutdiv">
        <div className="spacetraveller">
          <img src={aboutimg} alt="aboutimg" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            {/* details about me here */}
            <article className="about_card">
              <FaAward className="about_icon" />
              <h3>Experience</h3>
              <h4>2+ Years</h4>
            </article>
            {/* details end over here  */}

            {/* details about me here */}
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h3>Worked on </h3>
              <h4>10+ Projects</h4>
            </article>
            {/* details end over here  */}

            {/* details about me here */}

            <article className="about_card">
              <GiSkills className="about_icon" />
              <h3>Full Stack Developer</h3>
            </article>
            {/* details end over here  */}
          </div>
          <ul>
            <li>
              I'm a <b style={{ color: "#0c90c8" }}> Backend-Focused </b>
              Full-Stack Developer. I have created various complex backend
              systems like <b>HMS</b>
              (Hospital Management System), <b>HRM</b> (Human Resource
              Management), and more. Check out some of my work in the Projects
              section.
            </li>
            <li>
              I am also involved in extracurricular activities. I am a{" "}
              <b>gold medalist</b> in <b>shooting</b> at the state level and
              have been selected for the Nationals.
            </li>
            <li>
              <b>Flexible </b>to learn new technologies and very up-to-date with
              the latest trends.
            </li>
            <li>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
