// libraries
import React from 'react';
import { Link } from 'react-router-dom';
// styles
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/">Posts Application</Link>
            </div>
        </header>
    );
};

export default Header;
