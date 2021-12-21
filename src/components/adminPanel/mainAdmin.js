import { observer } from 'mobx-react-lite';
import React, { Suspense, useEffect } from 'react';
import { URL_API } from '../../services/apiService';
import storeUsers from '../../stores/usersStore';
import storeMain from '../../stores/mainStore';
import storeComment from '../../stores/commentsStore';

const MainAdmin = (props) => {
    const StepsNav = React.lazy(() => import('../HOC/stepsNav'));

    useEffect(() => {
            let usersUrl = URL_API + "/";
            storeUsers.getUsersData(usersUrl);
            let countriesUrl = URL_API + "/countries";
            storeMain.getCountriesData(countriesUrl)
            let commentUrl = URL_API + "/comments";
            storeComment.getCommentsData(commentUrl);
    }, []);

    return (
        <main>
            <div className="section-admin">
            <Suspense fallback={<h2>Loading...</h2>}>
                <StepsNav />
            </Suspense>
            </div>
        </main >
    )
}

export default observer(MainAdmin)