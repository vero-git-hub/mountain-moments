import React from 'react';
import './CTAButton.css';

const CTAButton = ({ setModalOpen }) => {
    return (
        <button className="cta-button" onClick={() => setModalOpen(true)}>
            Contact
        </button>
    );
};

export default CTAButton;