import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';
import storeCountry from '../../stores/countryPageStore';
import Header from '../HomePage/header';
import { URL_API } from '../services/apiService';
import { toJS } from 'mobx';
import './css/countryPage.css'
import CountryPageContent from './countryPageContent';
import CountryPageComments from './countryPageComments';

export const WrapperDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap: wrap;
`;

export const AttractionDiv = styled.div`
min-height: 350px;
`;

const CountryPage = (props) => {

    useEffect(() => {
        let dataUrl = URL_API + "/countries/" + props.match.params.countryName;
        storeCountry.getSingleCountryData(dataUrl);
        console.log(storeCountry.countryData);
    }, [props.match.params.countryName])

    console.log(toJS(storeCountry.countryData.hotels));

    return (
        <>
            <Header />
            <main className="bg-dark" style={{ padding: "32px" }}>
                <article className="article-header">
                    {storeCountry.countryData?.abroad &&
                        <Tooltip title="Flight needed">
                            <div style={{ cursor: "help" }} className="border rounded-circle p-2 ms-3 block">
                                <i className="fas fa-plane-departure"></i>
                            </div>
                        </Tooltip>
                    }
                    <h1>{storeCountry.countryData?.name}</h1>
                    <div></div>
                </article>
                <hr style={{ backgroundColor: "#263EA0", borderTop: "3px solid #263EA0" }} />
                <div className="container mt-5">
                    <WrapperDiv>
                        <div className="col-lg-5">
                            <h2 className="border-bottom text-white">Hotels</h2>
                            <CountryPageContent dataValue={"hotels"} />
                        </div>
                        <div className="col-lg-5">
                            <h2 className="border-bottom text-white">Campings</h2>
                            <CountryPageContent dataValue={"campings"} />
                        </div>
                    </WrapperDiv>
                    <hr />
                    <WrapperDiv>
                        <div className="col-lg-5">
                            <h2 className="border-bottom text-white">Restaurants</h2>
                            <CountryPageContent dataValue={"restaurants"} />
                        </div>
                        <div className="col-lg-5">
                            <h2 className="border-bottom text-white">Attractions</h2>
                            <CountryPageContent dataValue={"attractions"} />
                        </div>
                    </WrapperDiv>
                    <div style={{ minHeight: "300px" }} className="mt-3 p-3">
                        <h2 className="border-bottom border-5 text-start text-white">Comments</h2>
                        <CountryPageComments countryData={storeCountry.countryData} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default observer(CountryPage);