import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../navigation/Footer';
import NavBar from '../navigation/Navbar';

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;