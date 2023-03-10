import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home"


const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<Home></Home>} />
        </Routes>
    )
}

export default AppRouter