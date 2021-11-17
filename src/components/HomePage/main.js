import { Button, Tooltip } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import storeMain from '../../stores/mainStore';
import { URL_API } from '../../services/apiService';
import Countries from './countries';
import './css/main.css';


const WrapperDiv = styled.div`
min-height:400px;
`;


const Main = (props) => {
    useEffect(() => {
        let url = URL_API + "/countries";
        storeMain.getCountriesData(url);
    }, []);

    const [currentContinent, setCurrentContinent] = useState("");

    //Set method to prevent duplicate continents
    const uniqueContinents = Array.from(new Set(toJS(storeMain.countriesData).map(a => a.mainland.fields.mainland_name.stringValue)))
        .map(id => {
            return toJS(storeMain.countriesData).find(a => a.mainland.fields.mainland_name.stringValue === id)
        })
    console.log(uniqueContinents);

    return (
        <main className="bg-dark" style={{/* backgroundColor: "#141414", */ padding: "32px" }}>
            <hr style={{ backgroundColor: "#263EA0", borderTop: "3px solid #263EA0" }} />
            <WrapperDiv className="container-fluid">
                <article>
                    <h1 className="p-4">Choose your desired continent</h1>
                </article>
                <div className="container d-flex justify-content-around align-items-center flex-wrap mt-5">
                    {uniqueContinents.map((item, i) => {
                        return (
                            <div className="col-lg-3 d-flex justify-content-center m-4" key={i}>
                                <Link to="#countries">
                                    <Tooltip title={item.mainland.fields.mainland_name.stringValue}>
                                        <Button
                                            className="buttonImg"
                                            onClick={() => { storeMain.getCountriesContinentData(item.mainland.fields.mainland_name.stringValue); setCurrentContinent(item.mainland.fields.mainland_name.stringValue) }}
                                            type="primary"
                                            shape="circle"
                                        >
                                            <img src={item.mainland.fields.mainland_image.stringValue} alt={item.mainland.fields.mainland_name.stringValue} style={{ width: 200, height: 200 }} />
                                        </Button>
                                    </Tooltip>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </WrapperDiv>
            <div className="mt-5" id="countries">
                {storeMain.numOfCountriesInContinent > 0 &&
                    <>
                        <hr style={{ backgroundColor: "#263EA0", borderTop: "3px solid #263EA0" }} />
                        <article>
                            <h2 style={{ color: "#CB2B83" }}>{currentContinent}</h2>
                        </article>
                        <Countries />
                    </>
                }
            </div>
        </main>
    )
}

export default observer(Main)