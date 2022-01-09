import { observer } from 'mobx-react';
import React from 'react';
import CountryMain from '../components/CountryPage/countryMain';
import Footer from '../components/Layouts/footer';
import Navigation from '../components/Layouts/navigation';

const CountryPage = (props) => {
    return (
        <>
            <Navigation />
            <CountryMain countryName={props.match.params.countryName} />
            <Footer />
        </>
    )
}

export default observer(CountryPage);