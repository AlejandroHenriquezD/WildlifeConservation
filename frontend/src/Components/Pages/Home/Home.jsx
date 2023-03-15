import Impact from "./Partials/Impact";
import Species from "./Partials/Species";
import Wildlife from "./Partials/Wildlife";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Wildlife />
        <Impact />
        <Species />
      </div>
    </>
  );
};

export default Home;
