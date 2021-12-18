import React from 'react';
import storeMain from '../../stores/mainStore';
import { useHistory } from 'react-router';

const Countries = () => {
    let history = useHistory();

    return (
        <div className="d-flex justify-content-around align-items-center">
            {storeMain.continentData.map((item, i) => {
                return (
                    <div key={item.name} onClick={() => history.push("/country/" + item.name)} className="card">
                        <div className="face face1">
                            <div className="content">
                                <img alt={item.name} src={item.country_image} style={{ width: 240, height: 200 }} />
                            </div>
                        </div>
                            <div className="text-center face face2">
                                <div className="content" title={item.name} description={"item"}>
                                    <h3>{item.name}</h3>
                                    <div>Capital City: {item.capital}</div>
                                    <div>Population: {item.population}</div>
                                    <div>Language: {item.language}</div>
                                    <div>Currency: {item.currency}</div>
                                    <div>Calling Code: {item.calling_code}</div>
                                </div>
                            </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Countries