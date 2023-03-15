import { Outlet } from "react-router-dom";
import LocationList from "./Partials/LocationList";
import LLP from "./Partials/Locations-LandingPage";
import "./Locations.scss";

const Locations = () => {
  return (
    <>
      <div className="Locations">
        <LLP />
        <Outlet />
      </div>
    </>
  );
};

export default Locations;
