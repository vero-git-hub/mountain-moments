import React from 'react';

const ReviewCard = ({ img, alt, text, signature }) => (
	<div className="slide">
		<div className="image-container">
			<img src={img} alt={alt} loading="lazy"/>
		</div>
		<p className={"slide-text"}>{text}</p>
		<p className={"slide-signature"}>{signature}</p>
	</div>
);

export default ReviewCard;