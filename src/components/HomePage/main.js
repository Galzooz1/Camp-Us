import { Anchor, Button, Tooltip } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { Fragment, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import storeMain from '../../stores/mainStore';
import { URL_API } from '../services/apiService';
import Countries from './countries';
import './main.css';


const WrapperDiv = styled.div`
min-height:400px;
`;

const ButtonImg = styled.button`
height: auto;
width: auto;
background-color: transparent;
background-repeat: no-repeat;
border: none;
cursor: pointer;
overflow: hidden;
outline: none;
background-image: none;
border: 0 none;
/* added these */
margin: 2px;
padding: 8px;
&:focus,
&:active:focus,
&.active:focus {
  outline: 0 none;
  border: 0 none;
}
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
        <main style={{ backgroundColor: "#141414", padding: "32px" }}>
            <hr style={{ backgroundColor: "#263EA0" }} />
            <WrapperDiv className="container-fluid p-5">
                <h2 style={{ color: "#CB2B83" }} className="p-4 text-center">Choose your desired continent</h2>
                <div className="container d-flex justify-content-around align-items-center flex-wrap mt-5">
                    {uniqueContinents.map((item, i) => {
                        return (
                            <Fragment key={i}>
                                <Link to="#countries">
                                    <Tooltip title={item.mainland.fields.mainland_name.stringValue}>
                                        <Button
                                            className="buttonImg"
                                            onClick={() => { storeMain.getCountriesContinentData(item.mainland.fields.mainland_name.stringValue); setCurrentContinent(item.mainland.fields.mainland_name.stringValue) }}
                                            type="primary"
                                            shape="circle"
                                        >
                                            <img src={item.mainland.fields.mainland_image.stringValue} style={{ width: 200, height: 200 }} />
                                        </Button>
                                    </Tooltip>
                                </Link>
                            </Fragment>
                        )
                    })}
                </div>
            </WrapperDiv>
            <hr style={{ backgroundColor: "#263EA0" }} />
            <div id="countries">
                <h2 style={{ color: "#CB2B83" }} className="text-center">{currentContinent}</h2>
                {storeMain.numOfCountriesInContinent > 0 &&
                    <Countries />
                }
            </div>
        </main>
    )
}

export default observer(Main)