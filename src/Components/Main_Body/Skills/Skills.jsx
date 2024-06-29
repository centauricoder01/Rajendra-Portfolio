import React, { useState } from "react";
import "./Skills.css";
import { AllData } from "./Alldata";
import SingleSkill from "./SingleSkill";

const Skills = () => {
  const [showskill, setShowSkill] = useState(AllData);

  const handleAll = () => {
    setShowSkill(AllData);
  };
  const HandleFrontend = () => {
    setShowSkill(AllData.filter((types) => types.type === "Frontend"));
  };

  const HandleBackend = () => {
    setShowSkill(AllData.filter((types) => types.type === "Backend"));
  };
  return (
    <section id="skill">
      <h5 className="technicalskill">
        My <span style={{ color: "#0c90c8" }}>Technical</span> skills
      </h5>
      <div className="categories_button">
        <button className="btn" onClick={handleAll}>
          All
        </button>
        <button className="btn" onClick={HandleFrontend}>
          Frontend
        </button>
        <button className="btn" onClick={HandleBackend}>
          BackEnd
        </button>
      </div>
      <div className=" experience_container">
        {showskill.map((ele) => (
          <SingleSkill key={ele.id} name={ele.name} image={ele.images} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
