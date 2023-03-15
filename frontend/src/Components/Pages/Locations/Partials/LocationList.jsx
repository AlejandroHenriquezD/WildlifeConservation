import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const LList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getAllLocations();
  }, []);

  const getAllLocations = async () => {
    const response = await axios.get(`${endpoint}/locations`);
    setLocations(response.data);
    console.log(response);
  };

  return (
    <>
      {locations.map((location) => (
        <tr key={location.id}>
          <td> {location.name} </td>
          <td> {location.country} </td>
          <td> {location.short_description} </td>
          <td> {location.long_description} </td>
          {/* <td>
            <Link to={`/edit_articulo/${articulo.id}`} className='btn btn-primary'>Editar</Link>
            <button onClick={ ()=>deleteArticulo(articulo.id)} className='boton danger'>Eliminar</button>
        </td> */}
        </tr>
      ))}
      //* create a list genreted with the database data of the locations
    </>
  );
};

export default LList;
