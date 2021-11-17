import { Image, Spin, Tabs, Tooltip } from 'antd';
import React, { useState } from 'react';
import { Fragment } from 'react';
import storeCountry from '../../stores/countryPageStore';
import { AttractionDiv } from './countryMain';
import './css/countryContent.css';

const { TabPane } = Tabs;

const CountryPageContent = ({ dataValue }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            {storeCountry.countryData?.[dataValue]?.values?.length > 0 ?
                <Tabs style={{minHeight:"500px"}} className="bg-white p-4 border shadow">
                    <>
                        {storeCountry.countryData?.[dataValue]?.values.map((item, i) => {
                            return (
                                <TabPane tab={item?.mapValue.fields.name?.stringValue} key={i}>
                                    <AttractionDiv>
                                        <h2 className="text-center text-decoration-underline">{item?.mapValue.fields.name?.stringValue}</h2>
                                        <div style={{ cursor: "help" }} className="my-4">
                                            <Tooltip title={item?.mapValue.fields.stars?.integerValue + " Stars"}>
                                                {storeCountry.starsRender(item?.mapValue.fields.stars?.integerValue)}
                                            </Tooltip>
                                        </div>
                                        {item?.mapValue.fields.city?.stringValue &&
                                            <h4>City: {item?.mapValue.fields.city?.stringValue}</h4>
                                        }
                                        {item?.mapValue.fields.address?.stringValue &&
                                            <h4>Address: {item?.mapValue.fields.address?.stringValue}</h4>
                                        }
                                        {item?.mapValue.fields.food_type?.stringValue &&
                                        <h4>Food Type: {item?.mapValue.fields.food_type?.stringValue}</h4>
                                        }
                                        <div className="d-flex justify-content-start">
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
                                        <div className="mt-5 d-flex flex-wrap justify-content-around align-items-end">
                                            <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                                                {item?.mapValue.fields.imgs.arrayValue.values.map((img, i) => {
                                                    return (
                                                        <Fragment key={i}>
                                                            {i < 3 ?
                                                                <Image
                                                                    preview={{ visible: false }}
                                                                    style={{ borderRadius: "20px" }}
                                                                    key={img.stringValue}
                                                                    width={120}
                                                                    height={100}
                                                                    src={img.stringValue}
                                                                    alt="Hotel"
                                                                    onClick={() => setVisible(true)}
                                                                />
                                                                :
                                                                <div style={{ display: 'none' }}>
                                                                    <Image
                                                                        key={img.stringValue}
                                                                        src={img.stringValue}
                                                                        alt="Hotel"
                                                                    />
                                                                </div>
                                                            }
                                                        </Fragment>
                                                    )
                                                })}
                                            </Image.PreviewGroup>
                                        </div>
                                    </AttractionDiv>
                                </TabPane>
                            )
                        })}
                    </>
                </Tabs>
                :
                <div className="d-flex justify-content-center">
                    <Spin />
                </div>
            }
        </>
    )
}

export default CountryPageContent;