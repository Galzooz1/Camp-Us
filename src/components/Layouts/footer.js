import React from 'react';
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
                            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by &copy; <a href="#" className="footer__link">Gal Aluf</a>
                        <br />
                        For more work visit our <a href="#" className="footer__link"> website</a>.
                    </p>
                </div>
            </div>
        </footer>


    )
}

export default Footer