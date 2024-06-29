import React from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const SingleProject = ({
  image,
  title,
  desc,
  tech_stack,
  Github,
  Deploy,
  tag,
}) => {
  return (
    <>
      <article className="portfolio_item">
        <div className="tag">
          <HiOutlineBadgeCheck className="badge" />
          {tag}
        </div>
        <div className="portfolio_item_image">
          <img src={image} alt="one" />
        </div>
        <h3 style={{ color: "black", fontWeight: "bolder", marginTop: "10px" }}>
          {title}
        </h3>
        <p style={{ color: "black", marginTop: "10px" }}>{desc}</p>
        <p style={{ color: "black", marginTop: "10px" }}>
          <span style={{ color: "red", fontWeight: "bolder" }}>
            {" "}
            Tech Stack :
          </span>{" "}
          {tech_stack}
        </p>
        <div className="portfolio_item_cta">
          <a href={Github} className="btn" target="_blank" rel="noreferrer">
            Github
          </a>
          <a
            href={Deploy}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </article>
    </>
  );
};

export default SingleProject;
