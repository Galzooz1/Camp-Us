import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { toJS } from 'mobx';
import React, { useEffect } from 'react';
import storeMain from '../../stores/mainStore';

const Countries = (props) => {
    console.log(toJS(storeMain.continentData));
    return (
        <div style={{ minHeight: "600px" }} className="d-flex justify-content-around align-items-center bg-dark">
            {toJS(storeMain.continentData).map((item, i) => {
                console.log(item.country_image)
                return (
                    <Card
                        bordered
                        hoverable
                        style={{ width: 300, minHeight: 500 }}
                        cover={
                            <div className="d-flex justify-content-center">
                                <img alt="example" src={item.country_image} style={{ width: 240, height: 300 }} />
                            </div>
                        }
                    >
                        <div className="text-center">
                        <Meta title={item.name} description={"item"} />
                            <div>Capital City: {item.capital}</div>
                            <div>Population: {item.population}</div>
                            <div>Language: {item.language}</div>
                            <div>Currency: {item.currency}</div>
                            <div>Calling Code: {item.calling_code}</div>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default Countries