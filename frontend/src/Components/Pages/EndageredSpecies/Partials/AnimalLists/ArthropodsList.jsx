import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"


export const ArthropodsList = () => {
  const [data, setData] = useState([])
  let { type } = useParams({ type: 'arthropods' })

  useEffect(() => {
    const getData = async () => {
      const endpoint = `http://127.0.0.1:8000/api/animals`
      const result = await axios.get(endpoint)
      const filter_data = result.data.filter(x => x.type === 'arthropods')
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
export default ArthropodsList
