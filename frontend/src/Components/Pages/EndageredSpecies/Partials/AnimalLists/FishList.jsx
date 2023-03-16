import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./FishList.scss";

export const FishList = () => {
  const [data, setData] = useState([]);
  let { type } = useParams({ type: "fish" });
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const endpoint = `https://wildlifeconservationapp.000webhostapp.com/api/animals`;
      const result = await axios.get(endpoint);
      const filter_data = result.data.filter((x) => x.type === "Fish");
      console.log(filter_data);
      setData(filter_data);
    };
    getData();
  }, [type]);

  return (
    <>
      <div className="FishList-container">
        {data &&
          data.map((animals) => {
            return (
              <div key={animals.id}
              onClick={() => navigate(`/Animals/${animals.id}`)}>
                <figure className="FishList-figure">
                  <p className="FishList-text">{animals.name}</p>
                  <img
                    className="FishList-img"
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
export default FishList;
