// libraries
import React from 'react';
// components
import Header from './Header';
import Footer from './Footer';
// styles
import './layout.scss';

const Layout = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="children-container container">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
