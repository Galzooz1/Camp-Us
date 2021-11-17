import { observer } from 'mobx-react-lite';
import React from 'react';
import Header from '../components/HomePage/header';
import CountryMain from '../components/CountryPage/countryMain';
import Footer from '../components/HomePage/footer';

const CountryPage = (props) => {
    return (
        <>
            <Header />
            <CountryMain countryName={props.match.params.countryName} />
            <Footer />
        </>
    )
}

export default observer(CountryPage);