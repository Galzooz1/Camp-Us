import React from 'react';
import { Link } from 'react-router-dom';
import CampusLogo from '../../assets/campUsLogo.png';

const Footer = (props) => {
    return (

        <footer className="footer">
            <div className="footer__logo-box">
                <img src={CampusLogo} alt="Full logo" className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><Link to="#" className="footer__link">Company</Link></li>
                            <li className="footer__item"><Link to="#" className="footer__link">Contact us</Link></li>
                            <li className="footer__item"><Link to="#" className="footer__link">Carrers</Link></li>
                            <li className="footer__item"><Link to="#" className="footer__link">Privacy policy</Link></li>
                            <li className="footer__item"><Link to="#" className="footer__link">Terms</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        All Rights Reserved &copy; {new Date().getFullYear()}
                        {/* Built by &copy; <Link to="#" className="footer__link">Gal Aluf</Link> */}
                        <br />
                        For more work visit our <Link to="#" className="footer__link"> website</Link>.
                    </p>
                </div>
            </div>
        </footer>


    )
}

export default Footer