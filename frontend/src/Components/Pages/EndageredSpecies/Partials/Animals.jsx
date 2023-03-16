import MammalsList from "./AnimalLists/MammalsList"
import ArthropodsList from "./AnimalLists/ArthropodsList"
import AmphibiansList from "./AnimalLists/AmphibiansList"
import BirdsList from "./AnimalLists/BirdsList"
import FishList from "./AnimalLists/FishList"
import ReptilesList from "./AnimalLists/ReptilesList"

const Animals = () => {
    return (
      <>
      <h2>ENDANGERED ANIMALS</h2>
      <h3>MAMMALS</h3>
      <div>
      <MammalsList />
      </div>
      <h3>ARTHROPODS</h3>
      <div>
        <ArthropodsList />
      </div>
      <h3>AMPHIBIANS</h3>
      <div>
        <AmphibiansList />
      </div>
      <h3>BIRDS</h3>
      <div>
        <BirdsList />
      </div>
      <h3>FISH</h3>
      <div>
        <FishList />
      </div>
      <h3>REPTILES</h3>
      <div>
        <ReptilesList />
      </div>
      </>
    )
  }
  
  export default Animals