import React from 'react';

const ReviewCard = ({ img, alt, text }) => (
	<div className="slide">
		<img src={img} alt={alt} />
		<p>{text}</p>
	</div>
);

export default ReviewCard;