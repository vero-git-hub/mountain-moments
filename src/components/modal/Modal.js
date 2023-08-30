import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<span className="close-button" onClick={onClose}>
				  &times;
				</span>
				<h2>Contact Form</h2>
				<div className="form-row">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" />
				</div>
				<div className="form-row">
					<label htmlFor="phone">Phone</label>
					<input type="text" id="phone" />
				</div>
				<button className="submit-button">Submit</button>
			</div>
		</div>
	);
};

export default Modal;