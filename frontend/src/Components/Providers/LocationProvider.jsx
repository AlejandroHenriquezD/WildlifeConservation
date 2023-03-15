
import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const LocationContext = createContext()

const LocationProvider = ({children}) => {

	const [ locationList, setLocationList ] = useState([])

	useEffect(() => {
		if(sessionStorage.getItem('locationList')) {
			setLocationList(JSON.parse(sessionStorage.getItem('locationList')))
		} else {
			const getData = async () => {
                const endpoint = "https://wildlifeconservationapp.000webhostapp.com/api/locations"
				const result = await axios.get(endpoint)
                setLocationList(result.data)
				sessionStorage.setItem('locationList', JSON.stringify(result.data));
			}
			getData()
		}
	}, [children]);
	
	return (
		<LocationContext.Provider value={{locationList, setLocationList}}>
			{children}
		</LocationContext.Provider>
	);
}

const useLocationData = () => useContext(LocationContext)

export { LocationProvider, useLocationData };
