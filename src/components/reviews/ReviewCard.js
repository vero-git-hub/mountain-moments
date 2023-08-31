import React from 'react';

const ReviewCard = ({ img, alt, text }) => (
	<div className="slide">
		<img src={img} alt={alt} loading="lazy"/>
		<p>{text}</p>
	</div>
);

export default ReviewCard;