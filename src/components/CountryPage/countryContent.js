import React from 'react';
import storeCountry from '../../stores/countryPageStore';
import { Image, Tooltip } from 'antd';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import WebDesigns from '../../definitions/webDesign';


const CountryContent = () => {
    let history = useHistory();
    const { isDesktop } = WebDesigns();

    console.log(isDesktop);
    return (
        <>
            {storeCountry.countryData?.[storeCountry.activityName]?.values.map((item, i) => {
                return (
                    <div className="section-country__item" key={i}>
                        <div className="section-country__item-details">
                            {localStorage["admin"] &&
                                <div style={{cursor:'pointer', fontSize:"1.7rem", margin:"0 4px"}} onClick={() => {
                                    if (window.confirm("Are you sure you want to delete this item?")) {
                                        storeCountry.deleteSingleActivity(storeCountry.countryData?.id, storeCountry.countryData?.name, storeCountry.activityName, i);
                                        history.push("/temp");
                                        history.goBack();
                                    }
                                }}>
                                    <Tooltip title="Delete">
                                        <i className="far fa-times-circle text-danger"></i>
                                    </Tooltip>
                                </div>
                            }
                            <div className="section-country__item-details-inner">
                                <h2 className="heading-secondary">{item?.mapValue.fields.name?.stringValue}</h2>
                                <div style={{ cursor: "help" }} className="mt-5 mb-4 d-flex justify-content-center">
                                    <Tooltip title={item?.mapValue.fields.stars?.integerValue + " Stars"}>
                                        {storeCountry.starsRender(item?.mapValue.fields.stars?.integerValue)}
                                    </Tooltip>
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
                                                <i className="fas fa-bed fa-2x"></i>
                                            </div>
                                        }
                                    </Tooltip>
                                    <Tooltip title="Swimming pool include">
                                        {item?.mapValue.fields.swimming?.booleanValue &&
                                            <div style={{ cursor: "help" }} className="p-2 mx-2 rounded-circle border-dark d-flex justify-content-center">
                                                <i className="fas fa-swimmer fa-2x"></i>
                                            </div>
                                        }
                                    </Tooltip>
                                    <Tooltip title="Wifi include">
                                        {item?.mapValue.fields.wifi?.booleanValue &&
                                            <div style={{ cursor: "help" }} className="p-2 mx-2 rounded-circle border-dark d-flex justify-content-center">
                                                <i className="fas fa-wifi fa-2x"></i>
                                            </div>
                                        }
                                    </Tooltip>

                                </div>
                                <div className="text-center mt-3">
                                    {item?.mapValue.fields.city?.stringValue &&
                                        <h4 className="heading-content">City: {item?.mapValue.fields.city?.stringValue}</h4>
                                    }
                                    {item?.mapValue.fields.address?.stringValue &&
                                        <h4 className="heading-content">Address: {item?.mapValue.fields.address?.stringValue}</h4>
                                    }
                                    {item?.mapValue.fields.food_type?.stringValue &&
                                        <h4 className="heading-content">Food Type: {item?.mapValue.fields.food_type?.stringValue}</h4>
                                    }
                                    {item?.mapValue.fields.hours?.stringValue &&
                                        <h4 className="heading-content">Open hours: {item?.mapValue.fields.hours?.stringValue}</h4>
                                    }
                                    {item?.mapValue.fields.description?.stringValue &&
                                        <>
                                        <br />
                                            <h4 className="heading-content">Description</h4>
                                            <div className="ms-5">
                                                <p className="paragraph">
                                                    {item?.mapValue.fields.description?.stringValue}
                                                </p>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={isDesktop ? "section-country__item-images composition" : "section-country__item-images"}>

                            {item?.mapValue.fields.imgs.arrayValue.values.map((img, i) => {
                                return (
                                    <Image.PreviewGroup key={i}>
                                        <Image
                                            preview={{ visible: false }}
                                            key={img.stringValue}
                                            src={img.stringValue}
                                            alt="Hotel"
                                        />
                                    </Image.PreviewGroup>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default observer(CountryContent)