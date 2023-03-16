import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./LocationList.scss";

export const LocationList = () => {
  const [data, setData] = useState([]);
  let { type } = useParams({ type: "locations" });
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const endpoint = `https://wildlifeconservationapp.000webhostapp.com/api/locations`;
      const result = await axios.get(endpoint);

      setData(result.data);
    };
    getData();
  }, [type]);

  return (
    <>
      {data &&
        data.map((locations) => {
          return (
            <div
              className="locations-container"
              key={locations.id}
              onClick={() => navigate(`/Locations/${locations.id}`)}
            >
              <figure className="locations-figure">
                <img
                  className="locations-img"
                  src={"https://wildlifeconservationapp.000webhostapp.com/"+locations.img}
                  alt={locations.short_description}
                />
              </figure>
              <div className="locations-info">
                <h2 className="locations-name">{locations.name}</h2>
                <h3 className="locations-country">{locations.country}</h3>
                <p className="locations-description">
                  {locations.long_description}
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default LocationList;
