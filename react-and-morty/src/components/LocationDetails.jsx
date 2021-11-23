import React from 'react'
import { useState } from 'react'
import { useParams, useLocation  } from 'react-router-dom'
import { useFetch } from '../api/useFetch'

const LocationDetails = () => {

  const { id } = useParams()
  const { data, url, isPending } = useFetch('https://rickandmortyapi.com/api/location/' + id)


  console.log("WWAAAAAA")
  console.log(data)
  console.log(url)
  console.log(isPending)

    return (
      <div className="loc-details">
        Location Details - { id }
      </div>
    )

}

export default LocationDetails