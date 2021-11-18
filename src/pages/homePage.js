import React from 'react';
import Header from '../components/Layouts/header';
import Main from '../components/HomePage/main';
import Strip from '../components/HomePage/strip';
import Footer from '../components/Layouts/footer';

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