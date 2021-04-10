import React from 'react';

const ServicesCard = ({ title, desc, image }) => {
    return (
        <article className="service-card mt-5">
            <div>
                <img src={image} alt={title} />
            </div>
            <div className="info mt-3">
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </article>
    );
};

export default ServicesCard;
