// import { Spin } from 'antd';
// import { observer } from 'mobx-react-lite';
// import React, { useEffect, useState } from 'react';
// import { Fragment } from 'react/cjs/react.production.min';
// import storeComment from '../../stores/commentsStore';

// import "./css/countryComments.css"


// const CountryPageComments = ({ countryName }) => {
//     useEffect(() => {
//         storeComment.getCountryComments(countryName);
//     }, [countryName]);

//     return (
//         <div className="bg-dark p-4">
//             {storeComment?.countryComments?.length ?
//                 storeComment.countryComments.map((item, i) => {
//                     return (
//                         <Fragment key={i}>
//                             <div className="commentPill rounded-pill border shadow p-2">
//                                 {item ?
//                                     <>
//                                         <span className="fw-bold me-1">{item.user}:</span>
//                                         <span>
//                                             {item.comment}
//                                         </span>
//                                     </>
//                                     :
//                                     <Spin style={{ color: "#fff" }} />
//                                 }
//                             </div>
//                             <hr className="bg-light" />
//                         </Fragment>
//                     )
//                 })
//                 :
//                 <>
//                     <div className="d-flex justify-content-center">
//                         <div className="display-6 text-info mb-4">Be the first one to comment!</div>
//                     </div>
//                     <hr className="bg-light" />
//                 </>
//             }
//         </div>
//     )
// }

// export default observer(CountryPageComments);
