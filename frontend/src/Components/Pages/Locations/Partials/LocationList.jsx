import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import LLP from "./Locations-LandingPage"
import "./LocationList.scss"

export const LocationList = () => {
  const [data, setData] = useState([])
  let { type } = useParams({ type: 'locations' })
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      const endpoint = `https://wildlifeconservationapp.000webhostapp.com/api/locations`
      const result = await axios.get(endpoint)
      
      setData(result.data)
    }
    getData()
  }, [type])

  return (
    <>
    <LLP />
      {data &&
        data.map((locations) => {
          return (
            <div key={locations.id} onClick={() => navigate(`/Location/${locations.id}`)}>
              <figure>
                  <img src={"https://wildlifeconservationapp.000webhostapp.com/"+locations.img} alt={locations.short_description}/>
              </figure>
              <div>
              <h2>
                  {locations.name}
              </h2> 
              <h3>
                {locations.country}
              </h3>
              <p>
                {locations.long_description}
              </p>
              </div>
            </div>
          )
        })}
    </>
  )
  
}
export default LocationList
