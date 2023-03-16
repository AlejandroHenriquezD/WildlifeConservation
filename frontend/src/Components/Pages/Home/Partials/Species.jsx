//* thinking we can just make a card generated picture with text from the data base
import "./Species.scss";

const Species = () => {
  let types = [
    {
      type: "Arthropods",
      img: "ARTHROPODS",
    },
    {
      type: "Mammals",
      img: "MAMMALS",
    },
    {
      type: "Ampbhibians",
      img: "AMPHIBIANS",
    },
    {
      type: "Reptiles",
      img: "REPTILES",
    },
    {
      type: "Fish",
      img: "FISH",
    },
    {
      type: "Birds",
      img: "BIRDS",
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
      img: "ARTHROPODS",
    },
  ];

  return (
    <>
      <div className="species-background">
        <h2 className="species-title">ENDANGERED SPECIES</h2>

        <div className="species-list">
          {types.map((type, index) => (
            <div key={index}>
              <p className="species-text">{type.type}</p>
              <img
                src={`Images/Species/${type.img}.jpg`}
                className="species-img"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Species;
