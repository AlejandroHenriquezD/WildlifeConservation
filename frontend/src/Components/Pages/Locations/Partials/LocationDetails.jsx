import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const LocationDetails = () => {
  console.log("details");
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://wildlifeconservationapp.000webhostapp.com/api/locations`
      );
      setData(result.data);
      console.log(result);
    };
    getData();
  }, [id, setData]);

  return (
    <>
      {data &&
        data.map((locations) => {
          return (
            <div key={locations.id}>
              <div>
                <h1>{locations.name}</h1>
                <h3>{locations.short_description}</h3>
                <button>make arrow down button</button>
              </div>
              <figure>
                <img src={locations.img} alt={locations.name} />
              </figure>
              <div>
                <h2>ABOUT</h2>
                <p>{locations.long_description}</p>
                <h2>RATE US!</h2>
              </div>
            </div>
          );
        })}
    </>
  );
};
