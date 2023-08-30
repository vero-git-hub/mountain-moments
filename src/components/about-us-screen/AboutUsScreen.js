import React from 'react';
import './AboutUsScreen.css';

const AboutUsScreen = () => (
	<div className="about-us-screen">
		<h2>About Us</h2>
		<div className="about-us-content">
			<div className="text-box">
				<p>
					Mountaintop Moments - is a...
					<ul>
						<li>Majestic mountain scenery.</li>
						<li>Comfortable chalets or cottages for living.</li>
							<li>Activities available to tourists: skiing, snowmobiling, trekking, etc.</li>
					</ul>
					You will have something to remember!
				</p>
			</div>
			<div className="image-grid">
				<img src="/img/about-us/red-house.jpg" alt="Image 1" />
				<img src="/img/about-us/mountains.jpg" alt="Image 2" />
				<img src="/img/about-us/mountain.jpg" alt="Image 3" />
				<img src="/img/about-us/rocks.jpg" alt="Image 4" />
				<img src="/img/about-us/lake.jpg" alt="Image 5" />
				<img src="/img/about-us/dog.jpg" alt="Image 6" />
			</div>
		</div>
	</div>
);

export default AboutUsScreen;
