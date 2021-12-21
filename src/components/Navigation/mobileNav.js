import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import CampusLogo from '../../assets/campUsLogo.png';

const MobileNav = (props) => {
    const location = useLocation();

    return (
        <div className={location.pathname === "/" ? "navburger__home" : "navburger"}>
            <div className="navburger__wrapper">
                <Link to={"/"} className="navburger__logo-box">
                    <img src={CampusLogo} className="navburger__logo" alt="Logo" />
                </Link>
                <div className="navburger">
                    <input type="checkbox" className="navburger__checkbox" id="navi-toggle" />

                    <label htmlFor="navi-toggle" className="navburger__button">
                        <i className="fas fa-bars navburger__main-icon"></i>
                    </label>

                    <div className="navburger__background">&nbsp;</div>

                    <nav className="navburger__nav">
                        <div className="navburger__list">
                            <Link to={"/"} className="navburger__item">
                                <div className="navburger__link">
                                    <i className="fas fa-home navburger__icon"></i>
                                    Home
                                </div>
                            </Link>
                            <Link to={"/about"} className="navburger__item">
                                <div className="navburger__link">
                                    <i className="fas fa-address-card navburger__icon"></i>
                                    About
                                </div>
                            </Link>
                            <Link to={"/contact"} className="navburger__item">
                                <div className="navburger__link">
                                    <i className="fas fa-envelope navburger__icon"></i>
                                    Contact
                                </div>
                            </Link>
                            <Link to={"/admin"} className="navburger__item">
                                <div className="navburger__link">
                                    <i className="fas fa-crown navburger__icon"></i>
                                    Admin
                                </div>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default MobileNav