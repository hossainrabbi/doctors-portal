import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppointmentCard = ({ title, desc, icon, bgColor }) => {
    return (
        <article className={`appointment-card ${bgColor}`}>
            <div className="icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="info">
                <h5>{title}</h5>
                <p>
                    <small>{desc}</small>
                </p>
            </div>
        </article>
    );
};

export default AppointmentCard;
