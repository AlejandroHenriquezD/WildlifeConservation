//* button needs to be set up to scroll down to the next section
import "./Wildlife.scss";
import { BsArrowDownCircle } from 'react-icons/bs';

const Wildlife = () => {
  return (
    <>
      <div className="background">
        <div className="image-text">
          <h1>
            WILDLIFE <br /> CONSERVATION
          </h1>
          <h3>
            Wildlife conservation aims to protect plant <br /> and animal
            species as the human <br /> population encroaches on their resources
          </h3>
        </div>
        <BsArrowDownCircle className="arrow-down"/>
      </div>
    </>
  );
};

export default Wildlife;
