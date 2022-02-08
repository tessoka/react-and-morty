import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({pageCount, handlePageClick}) => {


  return (
    <div className="char-pagination container">
      <ReactPaginate
        breakLabel=" ... "
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        nextLabel=">"
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={"paginationBtns"}
        activeClassName={"btn-pagi-active"}
        pageClassName={"btn-pagi"}
        nextClassName={"btn-pagi-prev-next"}
        previousClassName={"btn-pagi-prev-next"}
      />
    </div>
  )
}

export default Pagination
