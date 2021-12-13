import React, { useEffect, useState } from 'react';
import storeCountry from '../../stores/countryPageStore';
import { Fragment } from 'react';
import { Image, Tooltip } from 'antd';
import './css/countryContent.css';
import useMediaQuery from '../../hooks/useMediaQuery';
import WebDesigns from '../../definitions/webDesign';
import { observer } from 'mobx-react-lite';
import { IconDiv } from '../HOC/comments';
import { useHistory } from 'react-router';
import storeLogin from '../../stores/loginStore';


const CountryContent = () => {
    let history = useHistory();
    const {
        isDesktop
    } = WebDesigns()

    const renderClassName = (name) => {
        switch (name) {
            case "hotels":
                return "content-wrapper-1"
            case "campings":
                return "content-wrapper-2"
            case "restaurants":
                return "content-wrapper-3"
            case "attractions":
                return "content-wrapper-4"
            default:
                break;
        }
    }

    return (
        <>
            {storeCountry.countryData?.[storeCountry.activityName]?.values.map((item, i) => {
                return (
                    <div className={`content-wrapper ` + renderClassName(storeCountry.activityName)}>
                        <Fragment key={i}>
                            <div className="content-inner">
                                <div className="d-flex">
                                    <h2 className="content-heading">{item?.mapValue.fields.name?.stringValue}</h2>
                                    {storeLogin.isAdmin &&
                                        <IconDiv onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this item?")) {
                                                storeCountry.deleteSingleActivity(storeCountry.countryData?.id, storeCountry.countryData?.name, storeCountry.activityName, i);
                                                history.push("/temp");
                                                history.goBack();
                                            }
                                        }}>
                                            <Tooltip title="Delete">
                                                <i className="far fa-times-circle text-danger"></i>
                                            </Tooltip>
                                        </IconDiv>
                                    }
                                </div>
                                <div style={{ cursor: "help" }} className="mt-5 mb-4 d-flex justify-content-center">
                                    <Tooltip title={item?.mapValue.fields.stars?.integerValue + " Stars"}>
                                        {storeCountry.starsRender(item?.mapValue.fields.stars?.integerValue)}
                                    </Tooltip>
                                </div>
                                <div className="text-center mt-5">
                                    {item?.mapValue.fields.city?.stringValue &&
                                        <h4>City: {item?.mapValue.fields.city?.stringValue}</h4>
                                    }
                                    {item?.mapValue.fields.address?.stringValue &&
                                        <h4>Address: {item?.mapValue.fields.address?.stringValue}</h4>
                                    }
                                    {item?.mapValue.fields.food_type?.stringValue &&
                                        <h4>Food Type: {item?.mapValue.fields.food_type?.stringValue}</h4>
                                    }
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Tooltip title="Fire is Allowed">
                                        {item?.mapValue.fields.fire_allowed?.booleanValue &&
                                            <div style={{ cursor: "help" }} className="p-2 mx-2 rounded-circle border-dark d-flex justify-content-center">
                                                <i className="fas fa-fire-alt fa-2x"></i>
                                            </div>
                                        }
                                    </Tooltip>
                                    <Tooltip title="Sleeping points available">
                                        {item?.mapValue.fields.sleep_allowed?.booleanValue &&
                                            <div style={{ cursor: "help" }} className="p-2 mx-2 rounded-circle border-dark d-flex justify-content-center">
                                                <i class="fas fa-bed fa-2x"></i>
                                            </div>
                                        }
                                    </Tooltip>

                                </div>
                                <div className="content-imgs-main">
                                    {item?.mapValue.fields.imgs.arrayValue.values.map((img, i) => {
                                        return (
                                            <Image.PreviewGroup /*preview={{ visible, onVisibleChange: vis => setVisible(vis) }}*/>
                                                <Fragment key={i}>
                                                    <div className="content-img-wrapper">
                                                        <Image
                                                            preview={{ visible: false }}
                                                            style={{ borderRadius: "5px" }}
                                                            key={img.stringValue}

                                                            width={isDesktop ? 280 : 200}
                                                            height={isDesktop ? 280 : 200}
                                                            src={img.stringValue}
                                                            alt="Hotel"
                                                        // onClick={() => setVisible(true)}
                                                        />
                                                    </div>
                                                </Fragment>
                                            </Image.PreviewGroup>
                                        )
                                    })}
                                </div>
                            </div>
                        </Fragment>
                    </div>
                )
            })}
        </>
    )
}

export default observer(CountryContent)