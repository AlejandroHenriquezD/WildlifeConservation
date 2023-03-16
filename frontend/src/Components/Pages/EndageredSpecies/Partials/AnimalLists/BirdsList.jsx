import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./BirdsList.scss"

export const BirdsList = () => {
  const [data, setData] = useState([]);
  let { type } = useParams({ type: "birds" });
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const endpoint = `https://wildlifeconservationapp.000webhostapp.com/api/animals`;
      const result = await axios.get(endpoint);
      const filter_data = result.data.filter((x) => x.type === "Bird");
      console.log(filter_data);
      setData(filter_data);
    };
    getData();
  }, [type]);

  return (
    <>
      <div className="BirdList-container">
        {data &&
          data.map((animals) => {
            return (
              <div key={animals.id}
              onClick={() => navigate(`/Animals/${animals.id}`)}>
                <figure className="BirdList-figure">
                  <p className="BirdList-text">{animals.name}</p>
                  <img
                    className="BirdList-img"
                    src={animals.img}
                    alt={animals.short_description}
                  />
                </figure>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default BirdsList;
