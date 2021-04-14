import React from 'react';
import ReactModal from './ReactModal';

const Booking = ({ title, time, available, selectedDate }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const modalClick = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <article className="booking text-center my-3">
            <h4>{title}</h4>
            <h6>{time}</h6>
            <p>
                <small>{available}</small>
            </p>
            <button className="btn custom-btn px-2 mt-2" onClick={modalClick}>
                Book Appointment
            </button>
            <ReactModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                title={title}
                selectedDate={selectedDate}
            />
        </article>
    );
};

export default Booking;
