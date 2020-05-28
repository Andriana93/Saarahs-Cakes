import React from "react";

const CakeCard = props => {
  return (
    <div className="cake-card-column col-lg-4 col-md-6">
      <div className="card">
        <img className="card-img-top" src={props.img} alt={props.name} />
        <div className="card-body">
          <h4 className="cake-title">{props.name}</h4>
          <p className="cake-text">{props.description}</p>
          <p className="cake-price">£ {props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
