import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailsSlider.scss"

export const LocationDetails = () => {
  console.log("details");
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://wildlifeconservationapp.000webhostapp.com/api/location/${id}`
      );
      setData(result.data);
      console.log(result);
    };
    getData();
  }, [id, setData]);

  return (
    <>
      {data &&
        data.map((locations) => {
          return (
            <div key={locations.id}>
              <div>
                <h1>{locations.name}</h1>
                <h3>{locations.short_description}</h3>
                <button>make arrow down button</button>
              </div>
              <figure>
                <img src={locations.img} alt={locations.name} />
              </figure>
              <div>
                <h2>ABOUT</h2>
                <p>{locations.long_description}</p>
                <h2>RATE US!</h2>
              </div>
              <div>
              <section id="slider">
  <input type="radio" name="slider" id="s1" checked/>
  <input type="radio" name="slider" id="s2"/>
  <input type="radio" name="slider" id="s3"/>
  <input type="radio" name="slider" id="s4"/>
  <input type="radio" name="slider" id="s5"/>

  <label for="s1" id="slide1"><img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/></label>
  <label for="s2" id="slide2"><img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/></label>
  <label for="s3" id="slide3"><img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/></label>
  <label for="s4" id="slide4"><img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/></label>
  <label for="s5" id="slide5"><img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/></label>
</section>
              </div>
            </div>
          );
        })}
                 
    </>
  );
};
