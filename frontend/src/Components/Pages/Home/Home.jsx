import Impact from "./Partials/Impact"
import Species from "./Partials/Species"
import Wildlife from "./Partials/Wildlife"
import "./Home.scss"

const Home = () => {
  return (
	<>
  <div className="things">
  <Wildlife></Wildlife>
  {/* <Impact></Impact>
  <Species></Species> */}
  </div>
	</>
  )
}

export default Home