import React from 'react';
import Home from './Home';
import Appointment from './Appointment';
import '../../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <Home />
            <Appointment />
        </header>
    );
};

export default Header;
