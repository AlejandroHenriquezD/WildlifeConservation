//* button needs to be set up to scroll down to the next section
import "./Wildlife.scss";
import { BsArrowDownCircle } from 'react-icons/bs';

const Wildlife = () => {
  return (
    <>
      <div className="wildlife-background">
        <div className="wildlife-image-text">
          <h1>
            WILDLIFE <br /> CONSERVATION
          </h1>
          <h3>
            Wildlife conservation aims to protect plant and animal
            species as the human population encroaches on their resources
          </h3>
        </div>
        <BsArrowDownCircle className="wildlife-arrow-down"/>
      </div>
    </>
  );
};

export default Wildlife;
