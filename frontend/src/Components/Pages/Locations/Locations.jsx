
import { Outlet } from "react-router-dom"
import LocationList from "./Partials/LocationList"
import LLP from "./Partials/Locations-LandingPage"
import "./Partials/Locations-LandingPage.scss"

const Locations = () => {
    return (
      <>
      <LLP />
      <Outlet />
      </>
    )
  }
  
  export default Locations