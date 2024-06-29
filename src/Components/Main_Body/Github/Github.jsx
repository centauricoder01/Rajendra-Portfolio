import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./Github.css";

const Github = () => {
  return (
    <section id="Gihub">
      <div className="Maingithub">
        <h1>
          <span style={{ color: "#0c90c8" }}>Git</span>hub{" "}
          <span style={{ color: "#0c90c8" }}>Sta</span>tus
        </h1>
        <div className="GithubCalendars">
          <GitHubCalendar
            username="centauricoder01"
            style={{ width: "100%", margin: "auto" }}
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </div>
        <div className="Status_github">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=centauricoder01&theme=windows-dark&hide_border=true"
            alt="img"
          />
        </div>
      </div>
    </section>
  );
};

export default Github;
