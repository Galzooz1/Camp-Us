import React from 'react';
import Header from '../components/Layouts/header';
import MainAdmin from '../components/adminPanel/mainAdmin';
import Footer from '../components/Layouts/footer';


const AdminPanel = (props) => {
    return(
        <>
            <Header />
            <MainAdmin />
            <Footer />
        </>
    )
}

export default AdminPanel