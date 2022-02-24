import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import '../assets/css/main.css'

const Layout = (props) => {
    return (
        <>
        <Navbar/>
        {props.children}
        <Footer/>
        </>
    )
}

export default Layout