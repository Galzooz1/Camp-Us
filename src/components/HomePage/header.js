import React from 'react';
import Navigation from '../Layouts/navigation';

const Header = (props) => {

    return (
        <header className="header">
            <Navigation />
            <div className="header__text-box">
                <div>

                    <h1 className="heading-primary">
                        <span className="heading-primary--main">CampUs</span>
                        <span className="heading-primary--sub">let your adventure begin</span>
                    </h1>
                    <a href="#section-tours" className="btn btn--white btn--animated">Discover tours</a>
                </div>
            </div>
        </header>
    )
}

export default Header