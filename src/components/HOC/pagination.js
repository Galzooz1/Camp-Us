import { observer } from 'mobx-react';
import React from 'react';
import storeComment from '../../stores/commentsStore';
// import storePaginate from '../../stores/paginateStore';

const Pagination = ({totalCount}) => {
  console.log(totalCount)
  console.log(storeComment.countPerPage)
  console.log(storeComment.currentPage)
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCount / storeComment.countPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <div style={{cursor:"pointer"}} onClick={() => storeComment.paginate(number)} className='page-link'>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
    )
}

export default observer(Pagination)