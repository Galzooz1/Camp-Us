import React from 'react';
import MainAdmin from '../components/adminPanel/mainAdmin';
import Footer from '../components/Layouts/footer';
import Navigation from '../components/Layouts/navigation';


const AdminPanel = (props) => {
    return(
        <>
            <Navigation />
            <MainAdmin />
            <Footer />
        </>
    )
}

export default AdminPanel