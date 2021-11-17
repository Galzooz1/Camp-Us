import React from 'react';
import Header from '../components/HomePage/header';
import Main from '../components/HomePage/main';
import Strip from '../components/HomePage/strip';
import Footer from '../components/HomePage/footer';

const HomePage = (props) => {
    return(
        <>
            <Header />
            <Strip />
            <Main />
            <Footer />
        </>
    )
}

export default HomePage