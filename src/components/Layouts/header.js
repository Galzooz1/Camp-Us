import React from 'react';
import Navigation from './navigation';


const Header = (props) => {

    return (
        <header className="header">
            <Navigation />
            <div class="header__text-box">
                <div>

                    <h1 class="heading-primary">
                        <span class="heading-primary--main">Outdoors</span>
                        <span class="heading-primary--sub">is where life happens</span>
                    </h1>
                    <a href="#section-tours" class="btn btn--white btn--animated">Discover our tours</a>
                </div>
            </div>
        </header>
    )
}

export default Header