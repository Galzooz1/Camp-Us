import React from 'react';
import Navigation from '../Layouts/navigation';

const Header = (props) => {

    return (
        <header className="header">
            <Navigation />
            <div class="header__text-box">
                <div>

                    <h1 class="heading-primary">
                        <span class="heading-primary--main">CampUs</span>
                        <span class="heading-primary--sub">let your adventure begin</span>
                    </h1>
                    <a href="#section-tours" class="btn btn--white btn--animated">Discover tours</a>
                </div>
            </div>
        </header>
    )
}

export default Header