import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Image } from 'antd';
import storeCountry from '../../stores/countryPageStore';
import Header from '../HomePage/header';
import { URL_API } from '../services/apiService';
import { toJS } from 'mobx';

const WrapperDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
flex-wrap: wrap;
`;

const AttractionDiv = styled.div`
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
                <article>
                    <h1>{storeCountry.countryData?.name}</h1>
                </article>
                <hr />
                <div className="container mt-5">
                    <WrapperDiv>
                        <div className="col-lg-5">
                            <h2 className="border-bottom">Hotels</h2>
                            {toJS(storeCountry.countryData?.hotels?.values)?.length > 0 &&
                                <>
                                    {toJS(storeCountry.countryData?.hotels?.values).map((item, i) => {
                                        // console.log(item)
                                        return (
                                            <AttractionDiv className="bg-success p-4">
                                                <h3>City: {item?.mapValue.fields.city.stringValue}</h3>
                                                <h4>Address: {item?.mapValue.fields.address.stringValue}</h4>
                                                <h4>Stars: {item?.mapValue.fields.stars.integerValue}</h4>
                                                <Image.PreviewGroup>
                                                    <div className="mt-5 d-flex flex-wrap justify-content-around align-items-end">
                                                        <Image width={100} src="https://via.placeholder.com/500x500" />
                                                        <Image width={100} src="https://via.placeholder.com/500x500" />
                                                        <Image width={100} src="https://via.placeholder.com/500x500" />
                                                    </div>
                                                </Image.PreviewGroup>
                                            </AttractionDiv>
                                        )
                                    })}
                                </>
                            }
                        </div>
                        <div className="col-lg-5">
                            <h2>Hotels</h2>
                            <AttractionDiv className="bg-success p-5">

                            </AttractionDiv>
                        </div>
                    </WrapperDiv>
                    <hr />
                    <WrapperDiv>
                        <div className="col-lg-5">
                            <h2>Hotels</h2>
                            <AttractionDiv className="bg-success p-5">

                            </AttractionDiv>
                        </div>
                        <div className="col-lg-5">
                            <h2>Hotels</h2>
                            <AttractionDiv className="bg-success p-5">

                            </AttractionDiv>
                        </div>
                    </WrapperDiv>
                </div>
            </main>
        </>
    )
}

export default observer(CountryPage);