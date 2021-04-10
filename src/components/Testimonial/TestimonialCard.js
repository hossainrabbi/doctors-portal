import React from 'react';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestimonialCard = ({ name, title, desc, image }) => {
    return (
        <article className="testimonial-card mt-5 p-2">
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="info mt-3">
                <p className="desc">
                    <FontAwesomeIcon icon={faQuoteLeft} className="icon" />
                    {desc}
                    <FontAwesomeIcon icon={faQuoteRight} className="icon" />
                </p>
                <h5 className="mt-2 mb-0">{name}</h5>
                <p className="info-title">{title}</p>
            </div>
        </article>
    );
};

export default TestimonialCard;
