import React from 'react';
import { Link } from 'react-router-dom';

const FooterContent = ({ name, link }) => {
    return (
        <ul>
            <li>
                <Link to={`/${link}`}>{name}</Link>
            </li>
        </ul>
    );
};

export default FooterContent;
