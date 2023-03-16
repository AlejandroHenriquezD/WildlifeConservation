import MammalsList from "./AnimalLists/MammalsList";
import ArthropodsList from "./AnimalLists/ArthropodsList";
import AmphibiansList from "./AnimalLists/AmphibiansList";
import BirdsList from "./AnimalLists/BirdsList";
import FishList from "./AnimalLists/FishList";
import ReptilesList from "./AnimalLists/ReptilesList";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Animals.scss";

const Animals = () => {
  const [data, setData] = useState([]);
  let { type } = useParams({ type: "locations" });

  useEffect(() => {
    const getData = async () => {
      const endpoint = `https://wildlifeconservationapp.000webhostapp.com/api/animals`;
      const result = await axios.get(endpoint);

      setData(result.data);
      // console.log(result.data);
    };
    getData();
  }, [type]);

  return (
    <>
      <div>
        <h2 className="animals-title">ENDANGERED ANIMALS</h2>
        <h3 className="animals-type">MAMMALS</h3>
        <div>
          <MammalsList />
        </div>
        <h3 className="animals-type">ARTHROPODS</h3>
        <div>
          <ArthropodsList />
        </div>
        <h3 className="animals-type">AMPHIBIANS</h3>
        <div>
          <AmphibiansList />
        </div>
        <h3 className="animals-type">BIRDS</h3>
        <div>
          <BirdsList />
        </div>
        <h3 className="animals-type">FISH</h3>
        <div>
          <FishList />
        </div>
        <h3 className="animals-type">REPTILES</h3>
        <div>
          <ReptilesList />
        </div>
      </div>
    </>
  );
};

export default Animals;
