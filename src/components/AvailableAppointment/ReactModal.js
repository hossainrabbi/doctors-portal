import React from 'react';
import Modal from 'react-modal';
import BookingForm from '../BookingForm/BookingForm';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const ReactModal = ({ modalIsOpen, closeModal, title, selectedDate }) => {
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <BookingForm
                    title={title}
                    closeModal={closeModal}
                    selectedDate={selectedDate}
                />
            </Modal>
        </div>
    );
};

export default ReactModal;
