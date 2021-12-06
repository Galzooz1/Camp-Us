import { Tabs } from 'antd';
import React from 'react';
import './stepsNav.css';
import CountryContent from '../CountryPage/countryContent';
import WebDesigns from '../../definitions/webDesign';
import storeCountry from '../../stores/countryPageStore';

const { TabPane } = Tabs;

const StepsNav = () => {
    const {
        isDesktop,
    } = WebDesigns()
    return (
        <>
            <Tabs animated tabPosition="top" style={{ width: "100%", justifyContent: "center" }} defaultActiveKey="1">
                <TabPane
                    tab={
                        <div onClick={() => storeCountry.setActivityName("hotels")}>
                            {isDesktop ?
                                <span className="navLink">
                                    <i className="fas fa-hotel me-2"></i>
                                    Hotels
                                </span>
                                :
                                <span>
                                    <i className="fas fa-hotel fa-2x me-2"></i>
                                </span>
                            }
                        </div>

                    }

                    key="1"

                >
                    <h2 className="text-center text-white mt-4">Hotels</h2>
                    <CountryContent/>
                </TabPane>
                <TabPane
                    tab={
                        <div onClick={() => storeCountry.setActivityName("campings")}>
                            {isDesktop ?
                                <span className="navLink">
                                    <i className="fas fa-campground me-2"></i>
                                    Campings
                                </span>
                                :
                                <span>
                                    <i className="fas fa-campground fa-2x me-2"></i>
                                </span>
                            }
                        </div>
                    }
                    key="2"
                >
                    <h2 className="text-center text-white mt-4">Campings</h2>
                    <CountryContent/>
                </TabPane>
                <TabPane
                    tab={
                        <div onClick={() => storeCountry.setActivityName("restaurants")}>
                        {isDesktop ?
                            <span className="navLink">
                                <i className="fas fa-utensils me-2"></i>
                                Restaurants
                            </span>
                            :
                            <span>
                                <i className="fas fa-utensils fa-2x me-2"></i>
                            </span>
                    }
                        </div>
                    }
                    key="3"
                >
                    <h2 className="text-center text-white mt-4">Restaurants</h2>
                    <CountryContent/>
                </TabPane>
                <TabPane
                    tab={
                        <div onClick={() => storeCountry.setActivityName("attractions")}>
                        {isDesktop ?
                            <span className="navLink">
                                <i class="fas fa-snowman me-2"></i>
                                Attractions
                            </span>
                            :
                            <span>
                                <i class="fas fa-snowman fa-2x me-2"></i>
                            </span>
                    }
                        </div>
                    }
                    key="4"
                >
                    <h2 className="text-center text-white mt-4">Attractions</h2>
                    <CountryContent/>
                </TabPane>
            </Tabs >
        </>
    )
}

export default StepsNav