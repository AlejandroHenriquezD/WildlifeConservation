import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const AnimalContext = createContext()

const AnimalProvider = ({children}) => {

	const [ animalList, setAnimalList ] = useState([])

	useEffect(() => {
		if(sessionStorage.getItem('animalList')) {
			setAnimalList(JSON.parse(sessionStorage.getItem('animalList')))
		} else {
			const getData = async () => {
                const endpoint = "https://wildlifeconservationapp.000webhostapp.com/api/animals"
				const result = await axios.get(endpoint)
                setAnimalList(result.data)
				sessionStorage.setItem('animalList', JSON.stringify(result.data));
			}
			getData()
		}
	}, [children]);
	
	return (
		<AnimalContext.Provider value={{animalList, setAnimalList}}>
			{children}
		</AnimalContext.Provider>
	);
}

const useAnimalData = () => useContext(AnimalContext)

export { AnimalProvider, useAnimalData };
