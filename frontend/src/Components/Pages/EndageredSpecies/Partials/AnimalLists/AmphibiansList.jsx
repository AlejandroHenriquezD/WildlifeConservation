import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./AmphibiansList.scss";

export const AmphibiansList = () => {
  const [data, setData] = useState([]);
  let { type } = useParams({ type: "amphibians" });
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const endpoint = `https://wildlifeconservationapp.000webhostapp.com/api/animals`;
      const result = await axios.get(endpoint);
      // console.log(result.data)
      const filter_data = result.data.filter((x) => x.type === "Amphibian");
      // console.log(filter_data)
      setData(filter_data);
    };
    getData();
  }, [type]);

  return (
    <>
      <div className="AmphibianList-container">
        {data &&
          data.map((animals) => {
            return (
              <div key={animals.id} 
              onClick={() => navigate(`/Animals/${animals.id}`)}>
                <figure className="AmphibianList-figure">
                  <p className="AmphibianList-text">{animals.name}</p>
                  <img
                    className="AmphibianList-img"
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
export default AmphibiansList;
