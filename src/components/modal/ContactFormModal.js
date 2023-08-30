import React from 'react';

const ContactFormModal = ({ onSubmit }) => (
	<>
		<h2>Contact Form</h2>
		<div className="form-row">
			<label htmlFor="name">Name</label>
			<input type="text" id="name" />
		</div>
		<div className="form-row">
			<label htmlFor="phone">Phone</label>
			<input type="text" id="phone" />
		</div>
		<button className="submit-button" onClick={onSubmit}>Submit</button>
	</>
);

export default ContactFormModal;