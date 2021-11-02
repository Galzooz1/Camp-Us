import { Anchor, Button } from 'antd';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import React, { Fragment, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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

    //Set method to prevent duplicate continents
    const uniqueContinents = Array.from(new Set(toJS(storeMain.countriesData).map(a => a.mainland.fields.mainland_name.stringValue)))
        .map(id => {
            return toJS(storeMain.countriesData).find(a => a.mainland.fields.mainland_name.stringValue === id)
        })
    console.log(uniqueContinents);

    return (
        <div>
            <WrapperDiv className="container-fluid bg-success">
                <h2 className="text-center p-3">Choose your desired mainland</h2>
                <div className="container d-flex justify-content-around align-items-center mt-5">
                    {uniqueContinents.map((item, i) => {
                        return (
                            <Fragment key={i}>
                                {/* <div className="site-button-ghost-wrapper"> */}
                                    <Link to="#countries">
                                        <Button
                                            className="buttonImg"
                                            onClick={() => storeMain.getCountriesContinentData(item.mainland.fields.mainland_name.stringValue)}
                                            type="primary"
                                            shape="circle"
                                        >
                                            <img src={item.mainland.fields.mainland_image.stringValue} style={{ width: 200, height: 200 }} />
                                        </Button>
                                    </Link>
                                {/* </div> */}
                            </Fragment>
                        )
                    })}
                </div>
            </WrapperDiv>
            <div id="countries">
                {storeMain.numOfCountriesInContinent > 0 &&
                    <Countries />
                }
            </div>
        </div>
    )
}

export default observer(Main)