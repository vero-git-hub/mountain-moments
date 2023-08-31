import React, { useState, useRef } from 'react';
import './Reviews.css';
import ReviewCard from './ReviewCard';

const Reviews = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderRef = useRef(null);
	const totalSlides = 8;
	const slidesPerPage = 4;


	const scroll = (direction) => {
		if (sliderRef.current) {
			const slideWidth = 276;
			const gap = 20;
			const numberOfSlidesToScroll = 4;
			const offset = (slideWidth + gap) * numberOfSlidesToScroll;

			const newIndex = direction === 'left' ? Math.max(0, currentIndex - slidesPerPage) : Math.min(totalSlides - slidesPerPage, currentIndex + slidesPerPage);
			setCurrentIndex(newIndex);

			sliderRef.current.style.transition = 'all 0.5s ease-in-out';
			sliderRef.current.scrollLeft += direction === 'left' ? -offset : offset;

			setTimeout(() => {
				sliderRef.current.style.transition = 'none';
			}, 500);
		}
	};

	return (
		<div className="reviews" id="reviews">
			<h2>Summit Stories</h2>
			<div className="slider-container">
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
			<div className="slider-dots">
				{Array.from({ length: Math.ceil(totalSlides / slidesPerPage) }).map((_, index) => (
					<button
						key={index}
						className={`slider-dot ${currentIndex / slidesPerPage === index ? 'active' : ''}`}
						onClick={() => {
							setCurrentIndex(index * slidesPerPage);
							sliderRef.current.scrollLeft = (276 + 20) * index * slidesPerPage;
						}}
					>
					</button>
				))}
			</div>
		</div>
	);
};

export default Reviews;