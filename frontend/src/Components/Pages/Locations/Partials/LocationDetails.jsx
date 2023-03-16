import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailsSlider.scss";
import "./LocationDetails.scss";

export const LocationDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData =
    (async () => {
      const result = await axios.get(
        `https://wildlifeconservationapp.000webhostapp.com/api/location/${id}`
      );
      setData(result.data);
      console.log(result.data.tags);
    });
    getData();
  }, [id, setData]);

  return (
    <>
      {data ? (
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
              className="locationDetails-img"
            />
          </figure>
          <div>
            {/* <h2>Tags</h2> */}
            <h6>
              {/* {JSON.parse(data.tags).map((t, index) => {
                return <p key={index}>{t}</p>;
              })} */}
            </h6>
          </div>
          <div>
            <h2>ABOUT</h2>
            <p>{data.long_description}</p>
          </div>
          <div>
            <section id="slider">
              <input type="radio" name="slider" id="s1" />
              <input type="radio" name="slider" id="s2" />
              <input type="radio" name="slider" id="s3" />
              <input type="radio" name="slider" id="s4" />
              <input type="radio" name="slider" id="s5" />

              <label htmlFor="s1" id="slide1">
                <img
                  src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </label>
              <label htmlFor="s2" id="slide2">
                <img
                  src="https://media.cnn.com/api/v1/images/stellar/prod/220320181933-01-rare-snake-alabama-handout.jpg?c=original"
                  alt=""
                />
              </label>
              <label htmlFor="s3" id="slide3">
                <img
                  src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/306062281/1800"
                  alt=""
                />
              </label>
              <label htmlFor="s4" id="slide4">
                <img
                  src="https://cdn.britannica.com/37/75637-050-B425E8F1/Killer-whale.jpg"
                  alt=""
                />
              </label>
              <label htmlFor="s5" id="slide5">
                <img
                  src="https://i.natgeofe.com/k/a42a2dd2-b777-4d84-890d-0f604db36781/spotted-salamander-closeup_4x3.jpg"
                  alt=""
                />
              </label>
            </section>
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
