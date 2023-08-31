import React from 'react';

const ContactFormModal = ({ onSubmit }) => (
	<>
		<h2>Contact Form</h2>
		<div className="form-group">
			<label className="label" htmlFor="name">Name</label>
			<input className="input" type="text" id="name" name="name" required />
		</div>
		<div className="form-group">
			<label className="label" htmlFor="phone">Phone</label>
			<input className="input" type="tel" id="phone" name="phone" required />
		</div>
		<button className="submit-button cta-button" onClick={onSubmit}>Submit</button>
	</>
);

export default ContactFormModal;