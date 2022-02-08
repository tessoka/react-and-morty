import React from "react";
import { useState } from "react";
import CharacterCard from './CharacterCard'
import { useCharacters } from '../api/useData';
import Pagination from './Pagination'
import Spinner from './Spinner'


const Characters = () => {

  const [pageNum, setPageNum] = useState(1)
  const [isPending, characters] = useCharacters(pageNum);

  const handlePageClick = ({selected}) => {
    console.log(selected + 1)
    setPageNum(selected + 1)
  }

  return ( 
    <>
      <div className="char-container">

        { isPending && <Spinner />}

        { !isPending && characters.results.map(char =>
        <CharacterCard char={char} key={char.id}/>
        )}

      </div>
      { !isPending && <Pagination pageCount={characters.info.pages} handlePageClick={handlePageClick} /> }
    </>
  )
}
 
export default Characters;
