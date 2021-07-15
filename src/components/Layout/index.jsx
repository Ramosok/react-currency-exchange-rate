// libraries
import React from 'react';
// components
import Header from './Header';
import Footer from './Footer';
// styles
import './layout.css';

const Layout = ({ children }) => {
    return (
        <>
            <div className="content">
                <Header />
                <div className="content-container container">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
