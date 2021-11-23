import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../api/useFetch'

const LocationDetails = () => {

  const { id } = useParams()
  const [ data, url, isPending ] = useFetch('https://rickandmortyapi.com/api/location/' + id)

  console.log(data)
  console.log(isPending)

    return (
      <div className="loc-details">

        { isPending && <div>Loading...</div>}

        { !isPending && 
        <div className="loc-innerbox">
            <h2>Location Details - { id }</h2>
            <div className="loc-inbox-container">
                <div className="inbox-left">
                    <p><b>Name:</b> {data.name}</p>
                    <p><b>Type:</b> {data.type}</p>
                    <p><b>Dimension:</b> {data.dimension}</p>
                </div>
                <div className="inbox-right">
                    <p><b>Residents:</b> {data.residents.map(elem => <p>{elem}</p>)}</p>
                </div>
            </div>

        </div>}

      </div>
    )

}

export default LocationDetails