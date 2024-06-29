import React from "react";

const SingleSkill = ({ name, image }) => {
  const imgstyle = {
    width: "80%",
    margin: "auto",
    pointerEvents: "none",
    borderRadius: "1rem",
  };
  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <img src={image} alt="Hello world" style={imgstyle} />
        <p style={{ color: "black" }}>{name}</p>
      </div>
    </>
  );
};

export default SingleSkill;
