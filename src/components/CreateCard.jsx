import React from "react";
import CakeCard from "./CakeCard";

const CreateCard = cake => {
  return (
    <CakeCard
      key={cake.id}
      name={cake.name}
      img={cake.img}
      description={cake.description}
      price={cake.price}
    />
  );
};

export default CreateCard;
