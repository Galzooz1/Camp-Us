import React from 'react';
import WebDesigns from '../../definitions/webDesign';
import AuthUser from '../Auth/authUser';
import DesktopNav from '../Navigation/desktopNav';
import MobileNav from '../Navigation/mobileNav';


const Navigation = (props) => {
    const {
        isDesktop,
    } = WebDesigns();

    return (
        <>
            <AuthUser />
            {isDesktop ?
                <DesktopNav />
                :
                <MobileNav />
            }
        </>
    )
}

export default Navigation