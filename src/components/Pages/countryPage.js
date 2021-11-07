import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Image, Spin, Tooltip } from 'antd';
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
    const [hotelKey, setHotelKey] = useState(0);

    useEffect(() => {
        let dataUrl = URL_API + "/countries/" + props.match.params.countryName;
        storeCountry.getSingleCountryData(dataUrl);
        console.log(storeCountry.countryData);
    }, [props.match.params.countryName])

    console.log(toJS(storeCountry.countryData.hotels));

    const starsRender = (numOfStars) => {
        let stars = [];
        for (let i = 0; i < numOfStars; i++) {
            stars[i] = (<i className="fas fa-star text-warning"></i>)
        }
        return stars;
    }

    return (
        <>
            <Header />
            <main className="bg-dark" style={{ padding: "32px" }}>
                <article>
                    <h1>{storeCountry.countryData?.name}</h1>
                </article>
                <hr style={{ backgroundColor: "#263EA0", borderTop: "3px solid #263EA0" }} />
                <div className="container mt-5">
                    <WrapperDiv>
                        <div className="col-lg-5">
                            <h2 className="border-bottom text-white">Hotels</h2>
                            {storeCountry.countryData?.hotels?.values?.length > 0 ?
                                <>
                                    {storeCountry.countryData?.hotels?.values.map((item, i) => {
                                        // console.log(item)
                                        return (
                                            <AttractionDiv key={i} className="bg-success p-4">
                                                <h2>{item?.mapValue.fields.name.stringValue}</h2>
                                                <h3>City: {item?.mapValue.fields.city.stringValue}</h3>
                                                <h4>Address: {item?.mapValue.fields.address.stringValue}</h4>
                                                <h4>Stars:
                                                    <Tooltip title={item?.mapValue.fields.stars.integerValue + " Stars"}>
                                                     {starsRender(item?.mapValue.fields.stars.integerValue)}
                                                    </Tooltip>
                                                     </h4>
                                                <Image.PreviewGroup>
                                                    <div className="mt-5 d-flex flex-wrap justify-content-around align-items-end">
                                                        {item?.mapValue.fields.imgs.arrayValue.values.map((img, i) => {
                                                            return(
                                                                <Image key={img.stringValue} width={120} height={100} src={img.stringValue} />
                                                            )
                                                        })}
                                                        {/* <Image width={100} src="https://via.placeholder.com/500x500" /> */}
                                                        {/* <Image width={100} src="https://via.placeholder.com/500x500" /> */}
                                                    </div>
                                                </Image.PreviewGroup>
                                                <Button onClick={() => setHotelKey(hotelKey + 1)} type="primary">Next Hotel <i className="ms-2 fas fa-arrow-right"></i></Button>
                                            </AttractionDiv>
                                        )
                                    })}
                                </>
                                :
                                <div className="d-flex justify-content-center">
                                <Spin />
                                </div>
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