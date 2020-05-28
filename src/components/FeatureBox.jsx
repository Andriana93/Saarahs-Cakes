import React from "react";

const FeatureBox = props => {
  return (
    <div className="col-lg-4 feature-box">
      <h2 className="feature-title">{props.title}</h2>
      <p className="feature-text">{props.explanation}</p>
    </div>
  );
};

export default FeatureBox;
