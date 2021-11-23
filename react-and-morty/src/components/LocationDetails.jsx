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

        { !isPending && <div>Location Details - { id }
        <p>{data.name}</p>
        </div>}

      </div>
    )

}

export default LocationDetails