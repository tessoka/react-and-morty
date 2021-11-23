import React from "react";
// import { useState } from "react";
import CardLoc from './CardLoc'
import { useLocations } from '../api/useData';



const Locations = () => {

  const [isPending, locations] = useLocations(1);

  return ( 
    <div className="loc-container">

      { isPending && <div>Loading...</div>}

      { !isPending && locations.results.map(loc =>
      <CardLoc loc={loc} />
      )}
      
    </div>

  )
}
 
export default Locations;
