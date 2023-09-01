import React, { useState, useRef } from 'react';
import './Reviews.css';
import ReviewCard from './ReviewCard';

const Reviews = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderRef = useRef(null);
	const totalSlides = 8;
	const slidesPerPage = 4;
	const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Augue mauris augue neque gravida. Tincidunt id aliquet risus feugiat in ante metus dictum.";
	const signature = "Rhoncus, aenean";

	const scroll = (direction) => {
		if (sliderRef.current) {
			const slideWidth = 245;
			const gap = 25;
			const numberOfSlidesToScroll = 4;
			const offset = (slideWidth + gap) * numberOfSlidesToScroll;

			const newIndex = direction === 'left' ? Math.max(0, currentIndex - numberOfSlidesToScroll) : Math.min(totalSlides - numberOfSlidesToScroll, currentIndex + numberOfSlidesToScroll);
			setCurrentIndex(newIndex);

			sliderRef.current.style.transition = 'all 0.5s ease-in-out';
			sliderRef.current.scrollLeft = newIndex * (slideWidth + gap);

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
						text={text}
						signature={signature}
					/>
					<ReviewCard
						img="/img/slider/people.jpg"
						alt="Review 2"
						text={text}
						signature={signature}
					/>
					<ReviewCard
						img="/img/slider/sky.jpg"
						alt="Review 3"
						text={text}
						signature={signature}
					/>
					<ReviewCard
						img="/img/slider/mountaineers.jpg"
						alt="Review 4"
						text={text}
						signature={signature}
					/>
					<ReviewCard
						img="/img/slider/woman.jpg"
						alt="Review 5"
						text={text}
						signature={signature}
					/>
					<ReviewCard
						img="/img/slider/people.jpg"
						alt="Review 6"
						text={text}
						signature={signature}
					/>
					<ReviewCard
						img="/img/slider/sky.jpg"
						alt="Review 7"
						text={text}
						signature={signature}
					/>
					<ReviewCard
						img="/img/slider/mountaineers.jpg"
						alt="Review 8"
						text={text}
						signature={signature}
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