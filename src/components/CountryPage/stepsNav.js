import { Tabs } from 'antd';
import React from 'react';
import './css/stepsNav.css';
import CountryContent from '../CountryPage/countryContent';
import WebDesigns from '../../definitions/webDesign';
import storeCountry from '../../stores/countryPageStore';
import { useLocation } from 'react-router';
import DataTable from '../adminPanel/dataTable';
import storeAdmin from '../../stores/adminStore';
import { observer } from 'mobx-react-lite';
import storeMain from '../../stores/mainStore';
import storeComment from '../../stores/commentsStore';
import storeUsers from '../../stores/usersStore';
import { URL_API } from '../../services/apiService';

const { TabPane } = Tabs;

const StepsNav = () => {
    let location = useLocation()
    const {
        isDesktop,
    } = WebDesigns()

    return (
        <>
            <Tabs animated tabPosition="top" style={{ width: "100%", justifyContent: "center" }} defaultActiveKey="1">
                {/* Countries */}
                {location.pathname.includes("/country/") && (
                    <>
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
                            <CountryContent />
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
                            <CountryContent />
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
                            <CountryContent />
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
                            <CountryContent />
                        </TabPane>
                    </>
                )}
                {/* Admin Panel */}
                {location.pathname.includes("/admin") &&  (
                    <>
                        <TabPane
                            tab={
                                <div onClick={() => storeAdmin.changeApiMethod("users")}>
                                    {isDesktop ?
                                        <span className="navLink">
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
                            <h2 className="text-center text-white mt-4">Users</h2>
                            <DataTable />
                        </TabPane>
                        <TabPane
                            tab={
                                <div onClick={() => storeAdmin.changeApiMethod("countries")}>
                                    {isDesktop ?
                                        <span className="navLink">
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
                            <h2 className="text-center text-white mt-4">Countries</h2>
                            <DataTable />
                        </TabPane>
                        <TabPane
                            tab={
                                <div onClick={() => storeAdmin.changeApiMethod("comments")}>
                                    {isDesktop ?
                                        <span className="navLink">
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
                            <h2 className="text-center text-white mt-4">Comments</h2>
                            <DataTable />
                        </TabPane>
                    </>
                )}
            </Tabs>
        </>
    )
}

export default StepsNav;