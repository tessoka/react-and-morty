import React from "react";
import { useState } from "react";
import Card from './Card'
import ReactPaginate from 'react-paginate';



const Characters = ({characters}) => {
  console.log("check this: ");
  console.log(characters);

  const [ pageNumber, setPageNumber ] = useState(0)
  
  const cardsPerPage = 20
  const pagesVisited = pageNumber * cardsPerPage
  


  return ( 
    <div className="char-container">
      {characters.results.map(char =>
      <Card char={char} />
      )}
      <div className="char-pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}
 
export default Characters;
