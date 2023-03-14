import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"


export const LocationList = () => {
  const [data, setData] = useState([])
  let { type } = useParams({ type: 'locations' })

  useEffect(() => {
    const getData = async () => {
      const endpoint = `http://127.0.0.1:8000/api/locations`
      const result = await axios.get(endpoint)

      setData(result.data)
    }
    getData()
  }, [type])

  return (
    <>
      {data &&
        data.map((locations) => {
          return (
            <div key={locations.id}>
              <figure>
                  <img src={locations.img} alt={locations.short_description} />
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
