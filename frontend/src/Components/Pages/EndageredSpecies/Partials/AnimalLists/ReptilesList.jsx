import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./ReptilesList.scss"

export const ReptilesList = () => {
  const [data, setData] = useState([]);
  let { type } = useParams({ type: "reptiles" });
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const endpoint = `https://wildlifeconservationapp.000webhostapp.com/api/animals`;
      const result = await axios.get(endpoint);
      console.log(result.data);
      const filter_data = result.data.filter((x) => x.type === "Reptile");
      // console.log(filter_data);
      setData(filter_data);
    };
    getData();
  }, [type]);

  return (
    <>
      <div className="ReptileList-container">
        {data &&
          data.map((animals) => {
            return (
              <div key={animals.id}
              onClick={() => navigate(`/Animals/${animals.id}`)}>
                <figure className="ReptileList-figure ">
                  <div>
                    <p className="ReptileList-text">{animals.name}</p>
                  </div>
                  <img
                    className="ReptileList-img "
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
export default ReptilesList;
