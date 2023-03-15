import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export const LocationDetails = () => {
    console.log("details")
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://wildlifeconservationapp.000webhostapp.com/api/locations/${id}`
      )
      setData(result.data)
    }
    getData()
  }, [id, setData])

  return (
    <>
      <div>
        <h1>ggewhWTJTEYKTYYKTYEEURTEYERRETETW</h1>
        <figure>
          <img src={data.image} alt={data.name} />
        </figure>
      </div>
      <div>
        <h2>{data.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.long_description }}></p>
      </div>
    </>
  )
}
