import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./AnimalDetails.scss";

export const AnimalsDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();
  // let taggi = useRef();
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://wildlifeconservationapp.000webhostapp.com/api/animal/${id}`
      );
      setData(result.data);
      setLoading(false);
      console.log(result.data.tags);
    };
    getData();
    // getData();
  }, [id, setData]);

  // const getData = () => {
  //   axios.get( `https://wildlifeconservationapp.000webhostapp.com/api/location/${id}`).then((response) => {
  //     setData(response.data);
  //     setLoading(false);
  //   });
  // };

  return (
    <>
      {!isLoading ? (
        <div key={data.id}>
          <div>
            <h1>{data.name}</h1>
            {/* <h3>{data.short_description}</h3> */}
            {/* <button>make arrow down button</button> */}
          </div>
          <figure>
            <img
              src={data.img}
              alt={data.name}
              className="animalDetails-img"
            />
          </figure>
          {/* <div>
            <h2>PROTECTING</h2>
            <h6>
              <div className="locationDetails-protecting">
                {JSON.parse(data.tags).map((t, index) => {
                  return (
                    <div  key={index}>
                      <img className="locationDetails-protecting-img" src={`/Images/Species/${t}.jpg`} alt="" />
                      <p className="locationDetails-protecting-text">{t}</p>
                    </div>
                  );
                })}
              </div>
            </h6>
          </div> */}
          <div>
            <h2>ABOUT</h2>
            <p>{data.long_description}</p>
          </div>
        </div>
      ) : (
        <div>
          <br />
        </div>
      )}
    </>
  );
};