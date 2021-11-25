import React from 'react';
import storePaginate from '../../stores/paginateStore';

const Pagination = ({totalCount}) => {
  console.log(totalCount)
  console.log(storePaginate.countPerPage)
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCount / storePaginate.countPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <div style={{cursor:"pointer"}} onClick={() => storePaginate.paginate(number)} className='page-link'>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
    )
}

export default Pagination