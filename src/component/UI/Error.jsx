import React from "react";

const Error = ({ title, meeage }) => {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
