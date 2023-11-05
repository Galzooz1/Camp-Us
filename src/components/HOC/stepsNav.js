import { Tabs } from 'antd';
import React from 'react';
import CountryContent from '../CountryPage/countryContent';
import WebDesigns from '../../definitions/webDesign';
import storeCountry from '../../stores/countryPageStore';
import { useLocation } from 'react-router';
import DataTable from '../adminPanel/dataTable';
import storeAdmin from '../../stores/adminStore';

const { Item } = Tabs;

const StepsNav = () => {
    let location = useLocation()
    const {
        isDesktop,
    } = WebDesigns()

    return (
        <>
            <Tabs animated tabPosition="top" defaultActiveKey="1" className="section-country__nav-tabs">
                {/* Countries */}
                {location.pathname.includes("/country/") && (
                    <>
                        <Item
                            tab={
                                <div onClick={() => storeCountry.setActivityName("hotels")}>
                                    {isDesktop ?
                                        <span className="section-country__nav-tab">
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
                            <h2 className="section-country__nav-heading heading-primary--sub">Hotels</h2>
                            <CountryContent />
                        </Item>
                        <Item
                            tab={
                                <div onClick={() => storeCountry.setActivityName("campings")}>
                                    {isDesktop ?
                                        <span className="section-country__nav-tab">
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
                            <h2 className="section-country__nav-heading heading-primary--sub">Campings</h2>
                            <CountryContent />
                        </Item>
                        <Item
                            tab={
                                <div onClick={() => storeCountry.setActivityName("restaurants")}>
                                    {isDesktop ?
                                        <span className="section-country__nav-tab">
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
                            <h2 className="section-country__nav-heading heading-primary--sub">Restaurants</h2>
                            <CountryContent />
                        </Item>
                        <Item
                            tab={
                                <div onClick={() => storeCountry.setActivityName("attractions")}>
                                    {isDesktop ?
                                        <span className="section-country__nav-tab">
                                            <i className="fas fa-snowman me-2"></i>
                                            Attractions
                                        </span>
                                        :
                                        <span>
                                            <i className="fas fa-snowman fa-2x me-2"></i>
                                        </span>
                                    }
                                </div>
                            }
                            key="4"
                        >
                            <h2 className="section-country__nav-heading heading-primary--sub">Attractions</h2>
                            <CountryContent />
                        </Item>
                    </>
                )}
                {/* Admin Panel */}
                {location.pathname.includes("/admin") &&  (
                    <>
                        <Item
                            tab={
                                <div onClick={() => storeAdmin.changeApiMethod("users")}>
                                    {isDesktop ?
                                        <span className="section-country__nav-tab">
                                            <i className="fas fa-user me-2"></i>
                                            Users
                                        </span>
                                        :
                                        <span>
                                            <i className="fas fa-user fa-2x me-2"></i>
                                        </span>
                                    }
                                </div>}
                            key="1"
                        >
                            <h2 className="section-country__nav-heading heading-primary--sub">Users</h2>
                            <DataTable />
                        </Item>
                        <Item
                            tab={
                                <div onClick={() => storeAdmin.changeApiMethod("countries")}>
                                    {isDesktop ?
                                        <span className="section-country__nav-tab">
                                            <i className="fas fa-globe me-2"></i>
                                            Countries
                                        </span>
                                        :
                                        <span>
                                            <i className="fas fa-globe fa-2x me-2"></i>
                                        </span>
                                    }
                                </div>}
                            key="2"
                        >
                            <h2 className="section-country__nav-heading heading-primary--sub">Countries</h2>
                            <DataTable />
                        </Item>
                        <Item
                            tab={
                                <div onClick={() => storeAdmin.changeApiMethod("comments")}>
                                    {isDesktop ?
                                        <span className="section-country__nav-tab">
                                            <i className="fas fa-comment me-2"></i>
                                            Comments
                                        </span>
                                        :
                                        <span>
                                            <i className="fas fa-comment fa-2x me-2"></i>
                                        </span>
                                    }
                                </div>}
                            key="3"
                        >
                            <h2 className="section-country__nav-heading heading-primary--sub">Comments</h2>
                            <DataTable />
                        </Item>
                    </>
                )}
            </Tabs>
        </>
    )
}

export default StepsNav;