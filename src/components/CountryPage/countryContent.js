import React, { useState } from 'react';
import storeCountry from '../../stores/countryPageStore';
import { Fragment } from 'react';
import { Image, Tooltip } from 'antd';
import './css/countryContent.css';
import useMediaQuery from '../../hooks/useMediaQuery';


const CountryContent = ({ dataValue }) => {
    const [visible, setVisible] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 968px)');

    const renderClassName = (dataValue) => {
        switch (dataValue) {
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
            {storeCountry.countryData?.[dataValue]?.values.map((item, i) => {
                return (
                    <div className={`content-wrapper `+ renderClassName(dataValue)}>
                        <Fragment key={i}>
                            <div className="content-inner">
                                <h2 className="content-heading">{item?.mapValue.fields.name?.stringValue}</h2>
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

export default CountryContent