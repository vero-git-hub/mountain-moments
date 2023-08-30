import React from 'react';
import './ReviewsScreen.css';
import ReviewCard from './ReviewCard';

const ReviewsScreen = () => (
	<div className="reviews-screen">
		<h2>Summit Stories</h2>
		<div className="slider">
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
		</div>
	</div>
);

export default ReviewsScreen;