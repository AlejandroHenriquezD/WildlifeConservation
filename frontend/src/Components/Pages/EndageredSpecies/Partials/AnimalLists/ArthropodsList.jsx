import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./ArthropodsList.scss";

export const ArthropodsList = () => {
  const [data, setData] = useState([]);
  let { type } = useParams({ type: "arthropods" });
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const endpoint = `https://wildlifeconservationapp.000webhostapp.com/api/animals`;
      const result = await axios.get(endpoint);
      const filter_data = result.data.filter((x) => x.type === "Arthropod");
      console.log(filter_data);
      setData(filter_data);
    };
    getData();
  }, [type]);

  return (
    <>
      <div className="ArthropodList-container">
        {data &&
          data.map((animals) => {
            return (
              <div key={animals.id}
              onClick={() => navigate(`/Animals/${animals.id}`)}>
                <figure className="ArthropodList-figure">
                  <p className="ArthropodList-text">{animals.name}</p>
                  <img
                    className="ArthropodList-img "
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
export default ArthropodsList;
