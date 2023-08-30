import React from 'react';

const ThankYouMessage = ({ onClose }) => (
	<>
		<h2>Thank you!</h2>
		<p>The message has been sent, please wait for a call from the manager.</p>
		<button className="submit-button" onClick={onClose}>Ok</button>
	</>
);

export default ThankYouMessage;