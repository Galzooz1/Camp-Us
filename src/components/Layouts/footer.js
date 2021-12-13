import React from 'react';
import './css/footer.css';

const Footer = (props) => {
    return (
        <footer className="bg-secondary fw-bold text-center">
            <div className="d-flex justify-content-around w-25 mx-auto pt-4">
                <img class="rounded-circle" src="https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png" width="40" />
                <img class="rounded-circle" src="https://toppng.com/uploads/preview/instagram-color-icon-instagram-social-media-png-instagram-icon-11562851673w81euu4rop.png" width="40" />
                <img class="rounded-circle" src="https://e7.pngegg.com/pngimages/720/526/png-clipart-viber-logo-whatsapp-computer-icons-instant-messaging-mobile-phones-icon-whatsapp-symbol-text-logo-thumbnail.png" width="40"/>
            </div>
            <div className="mt-4"><small>&copy; Copyright 2021</small></div>
        </footer>
    )
}

export default Footer