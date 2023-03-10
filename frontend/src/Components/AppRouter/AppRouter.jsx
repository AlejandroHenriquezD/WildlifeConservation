import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Locations from "../Pages/Locations/Locations"


const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/Locations" element={<Locations />}></Route>
        </Routes>
    )
}

export default AppRouter