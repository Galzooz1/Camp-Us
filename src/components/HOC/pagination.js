import { observer } from 'mobx-react';
import React from 'react';
import storeComment from '../../stores/commentsStore';

const Pagination = ({totalCount}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCount / storeComment.countPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <div style={{cursor:"pointer"}} onClick={() => storeComment.paginate(number)} className='page-link bg-dark text-white'>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
    )
}

export default observer(Pagination)