import React from "react";
// import { useState } from "react";
import LocationCard from './LocationCard'
import { useLocations } from '../api/useData';



const Locations = () => {

  const [isPending, locations] = useLocations(1);

  return ( 
    <div className="loc-container">

      { isPending && <div>Loading...</div>}

      { !isPending && locations.results.map(loc =>
      <LocationCard loc={loc} key={loc.id}/>
      )}
      
    </div>

  )
}
 
export default Locations;
