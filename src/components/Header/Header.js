import React from 'react';
import Home from './Home';
import Visit from './Visit';
import '../../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <Home />
            <Visit />
        </header>
    );
};

export default Header;
