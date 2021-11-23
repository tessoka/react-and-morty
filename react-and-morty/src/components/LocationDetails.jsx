import React from 'react'
import { useState } from 'react'

const LocationDetails = () => {

    return (
        <div className="loc-details">
            <p><strong>Name:</strong><br/> {loc.name}</p>
            <p><strong>Type:</strong><br/> {loc.type}</p>
            <div></div>
            <div></div>
        </div>
    )

}

export default LocationDetails