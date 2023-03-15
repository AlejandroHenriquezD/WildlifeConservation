import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


export const ReptilesList = () => {
  const [data, setData] = useState([])
  let { type } = useParams({ type: 'reptiles' })

  useEffect(() => {
    const getData = async () => {
      const endpoint = `https://wildlifeconservationapp.000webhostapp.com/api/animals`
      const result = await axios.get(endpoint)
      const filter_data = result.data.filter(x => x.type === 'reptiles')
      console.log(filter_data)
      setData(filter_data)
    }
    getData()
  }, [type])

  return (
    <>
      {data &&
        data.map((animals) => {
          return (
            <div key={animals.id}>
              <figure>
              <p>
                  {animals.name}
              </p> 
                  <img src={animals.img} alt={animals.short_description} />
              </figure>
            </div>
          )
        })}
    </>
  )
  
}
export default ReptilesList
