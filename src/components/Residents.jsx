import React from "react";
import { useFetch } from "../api/useFetch";
import CharacterCard from './CharacterCard'
import Spinner from './Spinner'


const Residents = ({url}) => {

  const [ data, asdf, isPending ] = useFetch(url)


  // console.log(isPending)
  // console.log(data)


  return (
    <>
      { isPending && <Spinner />}
      { !isPending && 


        <div className="residents-box">
          <CharacterCard char={data} key={data.id}/>
          {/* <figure>
            <img src={data.image} />
            <figcaption>{data.name}</figcaption>
          </figure> */}
        </div>
      }
    </>
  )
}

export default Residents