import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../api/useFetch'
import Residents from './Residents'
import Spinner from './Spinner'

const LocationDetails = () => {

  const { id } = useParams()
  const [ data, url, isPending ] = useFetch('https://rickandmortyapi.com/api/location/' + id)

//   console.log(data)
//   console.log(isPending)

    return (
      <>
        { isPending && <Spinner />}

        { !isPending && 
        <div className="loc-details">
          <div className="loc-innerbox">
            <h2>Location Details - { id }</h2>
            <div className="loc-inbox-container">
              <div className="loc-details-info">
                <p><b>Name:</b> {data.name}</p>
                <p><b>Type:</b> {data.type}</p>
                <p><b>Dimension:</b> {data.dimension}</p>
              </div>
                <h3>Residents:</h3>
                {data.residents.map(url => 
                  <Residents url={url} key={url}/>
                )}
            </div>
          </div>
        </div>}
      </>
    )

}

export default LocationDetails