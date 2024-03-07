import React from 'react'
import ReactPaginate from 'react-paginate'
 
const PaginationPage = ({pageCount, onPageChange,totalCards,cardsPerPage}) => {

    let pages = []
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pages.push(i)
        console.log(pages, "pages ///////")
    }
  return (
    
       <div className='pagination-div'>
            {/* {pages.map((page, index) => (
                <button className='bg-gray-300  px-2 m-2 rounded ' onClick={() => setCurrentPage(page)} key={index}>{page}</button>
            ))} */}
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={onPageChange}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    
  )
}

export default PaginationPage
