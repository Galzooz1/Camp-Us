import React from 'react';
import { useLocation, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import CampusLogo from '../../assets/campUsLogo.png';
import storeLogin from '../../stores/loginStore';
import Login from '../Login/login';

const DesktopNav = (props) => {
    const location = useLocation();
    const history = useHistory();

    return (
        <div className={location.pathname === "/" ? "navigation__home" : "navigation"}>
            <div className="navigation__wrapper">
                <Link to={"/"} className="navigation__logo-box">
                    <img src={CampusLogo} className="navigation__logo" alt="Logo" />
                </Link>
                <nav className="navigation__nav">
                    <div className="navigation__list">
                        <Link to={"/"} className="navigation__item">
                            <div className="navigation__link">
                                <i className="fas fa-home navigation__icon"></i>
                                Home
                            </div>
                        </Link>
                        <Link to={"/about"} className="navigation__item">
                            <div className="navigation__link">
                                <i className="fas fa-address-card navigation__icon"></i>
                                About
                            </div>
                        </Link>
                        <Link to={"/contact"} className="navigation__item">
                            <div className="navigation__link">
                                <i className="fas fa-envelope navigation__icon"></i>
                                Contact
                            </div>
                        </Link>
                        {storeLogin.isAdmin &&
                            <Link to={"/admin"} className="navigation__item">
                                <div className="navigation__link">
                                    <i className="fas fa-crown navigation__icon"></i>
                                    Admin
                                </div>
                            </Link>
                        }
                        {localStorage["user_token"] ?
                            <div onClick={() => { storeLogin.onLogoutRequest(); history.go(0) }} className="navigation__item">
                                <div className="navigation__link">
                                    <i className="fas fa-sign-out-alt navigation__icon"></i>
                                    Logout
                                </div>
                            </div>
                            :
                            <Login />
                        }
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default DesktopNav