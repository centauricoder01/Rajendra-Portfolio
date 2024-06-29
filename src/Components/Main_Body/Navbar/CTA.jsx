import React from "react";
import CV from "../Nav/Rajendra_Patel_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn resumeButton">
        Resume
      </a>
      <a href="#project" className="btn btn-primary resumeButton">
        See Work
      </a>
    </div>
  );
};

export default CTA;
