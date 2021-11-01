import React from 'react';
import Header from './header';
import Main from './main';
import Strip from './strip';

const HomePage = (props) => {
    return(
        <>
            <Header />
            <Strip />
            <Main />
        </>
    )
}

export default HomePage