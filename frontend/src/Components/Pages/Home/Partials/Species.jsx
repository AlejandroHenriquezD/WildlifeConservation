//* thinking we can just make a card generated picture with text from the data base
import React, { useEffect, useState } from "react";
import "./Species.scss";

const Species = () => {
  let types = [
    {
      type: "Arthropods",
      img: "butterfly",
    },
    {
      type: "Mammals",
      img: "lion",
    },
    {
      type: "Ampbhibians",
      img: "frog",
    },
    {
      type: "Reptiles",
      img: "lizard",
    },
    {
      type: "Fish",
      img: "fish",
    },
    {
      type: "Birds",
      img: "bird",
    },

    {
      type: "Bryophytes",
      img: "Bryophytes",
    },
    {
      type: "Pteridophytes",
      img: "Pteridophytes",
    },
    {
      type: "Gymnosperms",
      img: "Gymnosperms",
    },
    {
      type: "Dicotyledons",
      img: "Dicotyledons",
    },
    {
      type: "Monocotyledons",
      img: "Monocotyledons",
    },
    {
      type: "See all",
      img: "bird",
    },
  ];

  return (
    <>
      <div className="species-background">
        <h2 className="species-title">ENDANGERED SPECIES</h2>

        <div className="species-list">
          {types.map((type) => (
            <div>
              <p className="species-text">{type.type}</p>
              <img
                src={`Images/Species/${type.img}.jpg`}
                className="species-img"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Species;
