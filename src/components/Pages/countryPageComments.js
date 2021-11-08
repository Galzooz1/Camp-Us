import React from 'react';

const CountryPageComments = ({ countryData }) => {

    return (
        <div className="bg-secondary p-4">
            {countryData.comments.values?.map((item, i) => {
                return (
                    <>
                    <div className="bg-success p-2">
                        {item.mapValue.fields.comment.stringValue}
                    </div>
                    <hr/>
                    </>
                )
            })}
            <div className="bg-danger d-flex justify-content-around align-items-center p-2">
                <label>Add New Comment...</label>
                <input type="text" placeholder="Write your comment" className="shadow border form-control w-75 rounded-pill" />
            </div>
        </div>
    )
}

export default CountryPageComments;
