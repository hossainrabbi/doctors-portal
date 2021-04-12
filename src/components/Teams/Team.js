import React from 'react';

const Team = ({ name, phone, photo }) => {
    return (
        <article className="team">
            <img src={photo} alt={name} />
            <div className="overlay">
                <div className="info">
                    <h5>{name}</h5>
                    <p>
                        <small>Phone: {phone}</small>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default Team;
