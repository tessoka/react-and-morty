import React from "react";
import "./App.css";
import { useState } from "react";
import { useCharacters, useLocations } from "./api/useData";
import rickandmortylogo from "./img/rickandmortylogo.png"
import Characters from "./components/Characters";

function App() {

  const locations = useLocations(1);

  console.log("Locations data: ");
  console.log(locations);

  const [showChars, setShowChars] = useState(false);


  return (
    
    <div className="App">
      <div className="logo">
        <img src={rickandmortylogo} alt="" />
      </div>
      <div className="buttons">
        <button onClick={()=> setShowChars(!showChars)} className="btn btn-characters">Characters</button>
        <button className="btn btn-locations">Locations</button>
      </div>
      {
        showChars 
        ? 
        <Characters />
        : 
        <div className="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur velit tempora voluptatum, quas voluptatibus sequi quae fugiat eum id nihil iusto temporibus iure dolor. Placeat reiciendis nihil error culpa.

        </p>
        </div> 
      }
    </div>
  )
}

export default App;
