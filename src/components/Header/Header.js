import React from 'react';
import Home from './Home';
import NavManu from './NavManu';
import Appointment from './Appointment';
import '../../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <NavManu />
            <Home />
            <Appointment />
        </header>
    );
};

export default Header;
