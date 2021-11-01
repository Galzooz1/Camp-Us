import { Button } from 'antd';
import { observer } from 'mobx-react';
import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import storeMain from '../../stores/mainStore';
import { URL_API } from '../services/apiService';

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
padding: 0;
&:focus,
&:active:focus,
&.active:focus {
  outline: 0 none;
  border: 0 none;
}
`;


//TODO: מימוש אובייקט ע"י סט
const Main = (props) => {
    useEffect(() => {
        let url = URL_API + "/countries";
        storeMain.getCountriesData(url);
        // let mainlandSet = [...new Set(Array.from(storeMain.countriesData))];
        
    }, []);
    
    let mainland = [...Array.from(storeMain.countriesData.map(item => item.mainland))];
    console.log(mainland);
    let mainlandSet = new Set(storeMain.countriesData.map(item => item.mainland));
    let mainlandData = []
    console.log(mainlandSet)
    // mainlandSet = new Set(storeMain.countriesData); 
    // console.log(mainlandSet);
    // const getData = async () => {
    //     let url = URL_API + "/countries";
    //     await storeMain.getCountriesData(url);
    //     mainlandSet = new Set(storeMain.countriesData.map(item => item))
    //     console.log(mainlandSet);
    // }

    // let mainlandSet = new Set(storeMain.countriesData.map(item => item.mainland))
    // console.log(mainlandSet);

    return (
        <div>
            <WrapperDiv className="container-fluid bg-success">
                <h2 className="text-center p-3">Choose your desired mainland</h2>
                <div className="container d-flex justify-content-around align-items-center mt-5">
                    {storeMain.countriesData.map((item, i) => {
                        return (
                            <Fragment key={i}>
                                {/* <div style={{ backgroundImage: `url(${item.mainland_image})` }}> */}
                                <ButtonImg onClick={() => console.log(item.mainland.fields.mainland_name.stringValue)} type="ghost">
                                    <img src={item.mainland.fields.mainland_image.stringValue} width="200" />
                                </ButtonImg>
                                {/* </div> */}
                            </Fragment>
                        )
                    })}
                </div>
            </WrapperDiv>
        </div>
    )
}

export default observer(Main)