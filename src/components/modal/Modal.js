import React, { useState } from 'react';
import './Modal.css';
import ThankYouMessage from './ThankYouMessage';
import ContactFormModal from './ContactFormModal';

const Modal = ({ isOpen, onClose }) => {
	const [isSubmitted, setSubmitted] = useState(false);

	const handleSubmit = () => {
		setSubmitted(true);
	};

	const handleOk = () => {
		setSubmitted(false);
		onClose();
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<span className="close-button" onClick={onClose}>
				  &times;
				</span>
				{ !isSubmitted ? (
					<ContactFormModal onSubmit={handleSubmit} />
				) : (
					<ThankYouMessage onClose={handleOk} />
				)}
			</div>
		</div>
	);
};

export default Modal;