import React from "react";
import "./App.css";
import { useState } from "react";
import { useCharacters, useLocations } from "./api/useData";
import rickandmortylogo from "./img/rickandmortylogo.png"
import Characters from "./components/Characters";
import Locations from "./components/Locations";

function App() {

  const locations = useLocations(1);

  console.log("Locations data: ");
  console.log(locations);

  const [showChars, setShowChars] = useState(false);
  const [showLocs, setShowLocs] = useState(false)

  const handleCharClick = () => {
    setShowChars(!showChars)
    setShowLocs(false)
  }

  const handleLocClick = () => {
    setShowLocs(!showLocs)
    setShowChars(false)
  }

  return (
    
    <div className="App">
      <div className="logo">
        <img src={rickandmortylogo} alt="" />
      </div>
      <div className="buttons">
        <button onClick={()=> handleCharClick()} className="btn btn-characters">Characters</button>
        <button onClick={()=> handleLocClick()} className="btn btn-locations">Locations</button>
      </div>
      {
        !showChars && !showLocs &&
        <div className="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur velit tempora voluptatum, quas voluptatibus sequi quae fugiat eum id nihil iusto temporibus iure dolor. Placeat reiciendis nihil error culpa.

        </p>
        </div> 
      }

      {
        showChars && <Characters />
      }

      {
        showLocs && <Locations />
      }
    </div>
  )
}

export default App;
