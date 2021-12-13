import { Tabs } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { Suspense, useEffect, useState } from 'react';
import { URL_API } from '../../services/apiService';
import storeUsers from '../../stores/usersStore';
import storeMain from '../../stores/mainStore';
import StepsNav from '../CountryPage/stepsNav';
import storeComment from '../../stores/commentsStore';
import storeAdmin from '../../stores/adminStore';

const { TabPane } = Tabs;

const MainAdmin = (props) => {
    const StepsNav = React.lazy(() => import('../CountryPage/stepsNav'));

    useEffect(() => {
        console.log(storeAdmin.apiMethodOf)
        // if(storeAdmin.apiMethodOf === "users"){
            let usersUrl = URL_API + "/";
            storeUsers.getUsersData(usersUrl);
            console.log(storeUsers.usersData);
        // }
        // if(storeAdmin.apiMethodOf === "countries"){
            let countriesUrl = URL_API + "/countries";
            storeMain.getCountriesData(countriesUrl)
        // }
        // if(storeAdmin.apiMethodOf === "comments"){
            let commentUrl = URL_API + "/comments";
            storeComment.getCommentsData(commentUrl);
        // }
    }, []);

    return (
        <main className="bg-dark p-5">
            <Suspense fallback={<h2>Loading...</h2>}>
                <StepsNav />
            </Suspense>
        </main >
    )
}

export default observer(MainAdmin)