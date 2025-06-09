import React, { use } from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';
import Loading from '../pages/Shared/Loading';
import { AuthContext } from '../contexts/AuthContext/AuthContext';




const RootLayout = () => {

    const {loading} = use(AuthContext)

    if(loading) {
        return <Loading></Loading>
    }

    return (
        <div className=' bg-[#E6E6FA]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;