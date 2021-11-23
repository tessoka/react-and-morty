import React from 'react'
import { useState } from 'react'


const LocationCard = ({loc}) => {

  

  return (
     
      <div onClick={() => {}} className="loc-card" >
          <div className="loc-info">
              <p><strong>Name:</strong><br/> {loc.name}</p>
              <p><strong>Type:</strong><br/> {loc.type}</p>
          </div>
      </div>
      
    
  )
}

export default LocationCard
