import React, { useState } from "react";
import "./Project.css";
import SingleProject from "./Single-Project";
import { Project_data } from "./Project_data";

const Project = () => {
  const [Category, setCategory] = useState(Project_data);
  return (
    <section id="project">
      <h5 className="Headline_Project">
        My Creative <span style={{ color: "#0c90c8" }}>project</span> Section
      </h5>
      <div className="category_button">
        <button
          className="btn"
          onClick={() => {
            setCategory(
              Project_data.filter((type) => type.category === "HTML")
            );
          }}
        >
          HTML
        </button>
        <button
          className="btn"
          onClick={() => {
            setCategory(
              Project_data.filter((type) => type.category === "REACT")
            );
          }}
        >
          REACT
        </button>
        <button
          className="btn"
          onClick={() => {
            setCategory(
              Project_data.filter((type) => type.category === "MERN")
            );
          }}
        >
          MERN
        </button>
        <button
          className="btn"
          onClick={() => {
            setCategory(Project_data);
          }}
        >
          ALL
        </button>
      </div>
      <div className=" portfolio_container">
        {Category.map((ele) => (
          <SingleProject
            key={ele.id}
            image={ele.img}
            title={ele.title}
            desc={ele.desc}
            tech_stack={ele.tech_stack}
            Github={ele.Github_link}
            Deploy={ele.Deploy_link}
            tag={ele.category}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
