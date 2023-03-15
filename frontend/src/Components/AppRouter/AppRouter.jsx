import { Route, Routes } from "react-router-dom";
import About from "../Pages/About-Us/About-Us";
import Endangered from "../Pages/EndageredSpecies/EndageredSpecies";
import Home from "../Pages/Home/Home";
import Locations from "../Pages/Locations/Locations";
import { LocationDetails } from "../Pages/Locations/Partials/LocationDetails";
import LocationList from "../Pages/Locations/Partials/LocationList";
import SignIn from "../Pages/Sign-In/Sign-In";
import SignUp from "../Pages/Sign-Up/Sign-Up";

const AppRouter = () => {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />}></Route>
        <Route path="/Locations" element={<Locations />}>
          <Route index element={<LocationList />} />
          <Route path=":id" element={<LocationDetails />} />
        </Route>
        <Route path="/EndangeredSpecies" element={<Endangered />}></Route>
        <Route path="/Sign-up" element={<SignUp />}></Route>
        <Route path="/Sign-in" element={<SignIn />}></Route>
      </Routes>
  );
};

export default AppRouter;
