// libraries
import React from 'react';
import { Link } from 'react-router-dom';
// styles
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/">HEADER</Link>
            </div>
        </header>
    );
};

export default Header;
