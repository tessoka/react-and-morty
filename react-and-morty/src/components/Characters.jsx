import React from "react";
import { useState } from "react";
import Card from './Card'
import { useCharacters } from '../api/useData';
import Pagination from './Pagination'


const Characters = () => {

  const [pageNum, setPageNum] = useState(1)
  const [isPending, characters] = useCharacters(pageNum);

  const handlePageClick = ({selected}) => {
    console.log(selected + 1)
    setPageNum(selected + 1)
  }


  console.log("isPending: ")
  console.log(isPending)
  console.log("Characters data: ");
  console.log(characters);


  const [ pageNumber, setPageNumber ] = useState(0)
  


  return ( 
    <div className="char-container">

      { isPending === false && characters.results.map(char =>
      <Card char={char} />
      )}

      <Pagination handlePageClick={handlePageClick} />

    </div>

  )
}
 
export default Characters;
