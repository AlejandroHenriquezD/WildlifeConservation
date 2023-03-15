import "./Locations-LandingPage.scss";
import { BsArrowDownCircle } from "react-icons/bs";

const LLP = () => {
  return (
    <>
      <div className="locations-background">
        <div className="locations-image-text">
          <h2 className="locations-h2">WILDLIFE CONSERVATION</h2>
          <h1 className="locations-h1">LOCATIONS</h1>
          <h3 className="locations-h3">
            Here is a list of locations that are working <br />
            toward protecting our wildlife
          </h3>
        </div>
        <div className="locations-forms">
          <form action="#">
            <input className="locations-search" type="text" placeholder="Search..." />
            <select className="locations-filter" name="animal" id="Animal">
              <option value="filter by animal">filter by animal</option>
              <option value="animal2">animal2</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default LLP;
