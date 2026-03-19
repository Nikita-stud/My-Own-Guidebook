//Pagination = not showing all data for better load
//Rather have next, previouse buttons
//Client-side pagination = all data is loaded to the browser, JS uses it to display only a portion of the data
//    Best for small api data fetches
//it is build on
// itemsPerPage, currentPage, totalItems , totalPages, Logic to slice the data

//1.Set amount shown per page
const itemsPerPage = 3;
const [currentPage, setCurrentPage] = useState(1);

//2. Calculate total pages from API
const totalPages = Math.ceil(norwegianCounties.length / itemsPerPage);

//3. Calculate the items for the current page
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = norwegianCounties.slice(indexOfFirstItem, indexOfLastItem);

//4.set up +1 page or -1page
 const handleNextPage = () => {
   setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
 };

 const handlePreviousPage = () => {
   setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
 };

<button onClick={handlePreviousPage} disabled={currentPage === 1}>
  Previous
</button>
<button onClick={handleNextPage} disabled={currentPage === totalPages}>
  Next
</button>


//EXAMPLE:
//THE BUTTONS
import React from 'react';

function PaginationControls({ currentPage, totalPages, onPageChange }) {
 const pageNumbers = [];
 for (let i = 1; i <= totalPages; i++) {
   pageNumbers.push(i);
 }

 return (
   <div>
     <button
       onClick={() => onPageChange(currentPage - 1)}
       disabled={currentPage === 1}
     >
       Previous
     </button>
     {pageNumbers.map((number) => (
       <button
         key={number}
         onClick={() => onPageChange(number)}
         style={{
           fontWeight: currentPage === number ? 'bold' : 'normal',
           margin: '0 5px',
         }}
       >
         {number}
       </button>
     ))}
     <button
       onClick={() => onPageChange(currentPage + 1)}
       disabled={currentPage === totalPages}
     >
       Next
     </button>
   </div>
 );
}

export default PaginationControls;
