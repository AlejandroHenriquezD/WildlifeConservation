import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./MammalsList.scss";

export const MammalsList = () => {
  const [data, setData] = useState([]);
  let { type } = useParams({ type: "Mammal" });
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const endpoint = `https://wildlifeconservationapp.000webhostapp.com/api/animals`;
      const result = await axios.get(endpoint);
      const filter_data = result.data.filter((x) => x.type === "Mammal");
      console.log(filter_data);
      setData(filter_data);
    };
    getData();
  }, [type]);

  return (
    <>
      <div className="MammalList-container">
        {data &&
          data.map((animals) => {
            return (
              <div key={animals.id}>
                <figure className="MammalList-figure"
                onClick={() => navigate(`/Animals/${animals.id}`)}>
                  <p className="MammalList-text">{animals.name}</p>
                  <img
                    className="MammalList-img"
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
export default MammalsList;
