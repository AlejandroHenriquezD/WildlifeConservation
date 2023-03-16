import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LLP from "./Locations-LandingPage";
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
      console.log(result.data);
    };
    getData();
  }, [type]);

  return (
    <>
      <LLP />
      <div className="location-container">
        {data &&
          data.map((location) => {
            return (
              <div
                className="location-list-container"
                key={location.id}
                onClick={() => navigate(`/Locations/${location.id}`)}
              >
                <figure className="location-figure">
                  <img
                    className="location-img"
                    src={location.img}
                    alt={location.name}
                  />
                </figure>
                <div className="location-info">
                  <h2 className="location-name">{location.name}</h2>
                  <h3 className="location-country">{location.country}</h3>
                  <div className="location-tag-container">
                    {JSON.parse(location.tags).map((t, index) => {
                      return (
                        <span className="location-tag" key={index}>
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default LocationList;
