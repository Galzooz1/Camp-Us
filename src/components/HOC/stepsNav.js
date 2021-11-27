import { Tabs } from 'antd';
import React from 'react';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import './stepsNav.css';
import CountryContent from '../CountryPage/countryContent';

const { TabPane } = Tabs;

const StepsNav = () => {
    return (
        <>
            <Tabs animated tabPosition="top" style={{ width: "100%", justifyContent: "center" }} defaultActiveKey="1">
                <TabPane
                    tab={
                        <span>
                            <i className="fas fa-hotel me-2"></i>
                            Hotels
                        </span>
                    }
                    key="1"
                >
                    <h2 className="text-center text-white mt-4">Hotels</h2>
                    <CountryContent dataValue={"hotels"} />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <i className="fas fa-campground me-2"></i>
                            Campings
                        </span>
                    }
                    key="2"
                >
                    <h2 className="text-center text-white mt-4">Campings</h2>
                    <CountryContent dataValue={"campings"} />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <i className="fas fa-utensils me-2"></i>
                            Restaurants
                        </span>
                    }
                    key="3"
                >
                    <h2 className="text-center text-white mt-4">Restaurants</h2>
                    <CountryContent dataValue={"restaurants"} />
                </TabPane>
                <TabPane
                    tab={
                        <span>
                            <i class="fas fa-snowman me-2"></i>
                            Attractions
                        </span>
                    }
                    key="4"
                >
                    <h2 className="text-center text-white mt-4">Attractions</h2>
                    <CountryContent dataValue={"attractions"} />
                </TabPane>
            </Tabs>
        </>
    )
}

export default StepsNav