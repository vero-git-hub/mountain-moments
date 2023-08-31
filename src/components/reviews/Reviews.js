import React, { useRef } from 'react';
import './Reviews.css';
import ReviewCard from './ReviewCard';

const Reviews = () => {
	const sliderRef = useRef(null);

	const scroll = (direction) => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft += direction === 'left' ? -200 : 200;
		}
	};

	return (
		<div className="reviews" id="reviews">
			<h2>Summit Stories</h2>
			<button className="arrow arrow-left" onClick={() => scroll('left')}>&lt;</button>
			<div className="slider" ref={sliderRef}>
				<ReviewCard
					img="/img/slider/woman.jpg"
					alt="Review 1"
					text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				/>
				<ReviewCard
					img="/img/slider/people.jpg"
					alt="Review 2"
					text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				/>
				<ReviewCard
					img="/img/slider/sky.jpg"
					alt="Review 3"
					text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				/>
				<ReviewCard
					img="/img/slider/mountaineers.jpg"
					alt="Review 4"
					text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				/>
				<ReviewCard
					img="/img/slider/woman.jpg"
					alt="Review 5"
					text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				/>
				<ReviewCard
					img="/img/slider/people.jpg"
					alt="Review 6"
					text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				/>
				<ReviewCard
					img="/img/slider/sky.jpg"
					alt="Review 7"
					text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				/>
				<ReviewCard
					img="/img/slider/mountaineers.jpg"
					alt="Review 8"
					text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
				/>
			</div>
			<button className="arrow arrow-right" onClick={() => scroll('right')}>&gt;</button>
		</div>
	);
};

export default Reviews;