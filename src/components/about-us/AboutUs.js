import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
	const [lightbox, setLightbox] = useState({ isOpen: false, imgSrc: '' });

	const openLightbox = (src) => {
		setLightbox({ isOpen: true, imgSrc: src });
	};

	const closeLightbox = () => {
		setLightbox({ isOpen: false, imgSrc: '' });
	};

	return (
		<div className="about-us" id="about-us">
			<h2>About Us</h2>
			<div className="about-us-content">
				<div className="text-box">
					<p>Mountaintop Moments - is a...</p>
					<ul>
						<li>Majestic mountain scenery.</li>
						<li>Comfortable chalets or cottages for living.</li>
						<li>Activities available to tourists: skiing, snowmobiling, trekking, etc.</li>
					</ul>
					You will have something to remember!
					<p>
						Elit at imperdiet dui accumsan sit amet nulla facilisi. Et leo duis ut diam quam nulla porttitor. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Orci a scelerisque purus semper eget duis at tellus at. Dolor sit amet consectetur adipiscing elit pellentesque. Senectus et netus et malesuada fames ac. Ut morbi tincidunt augue interdum velit euismod. Tellus cras adipiscing enim eu turpis egestas pretium aenean. In hendrerit gravida rutrum quisque non tellus orci. Turpis massa sed elementum tempus egestas sed sed risus.
					</p>
				</div>
				<div className="image-grid">
					<img src="/img/about-us/red-house.jpg" alt="Image 1" onClick={() => openLightbox("/img/about-us/red-house.jpg")}/>
					<img src="/img/about-us/mountains.jpg" alt="Image 2"
						 onClick={() => openLightbox("/img/about-us/mountains.jpg")}
					/>
					<img src="/img/about-us/mountain.jpg" alt="Image 3"
						 onClick={() => openLightbox("/img/about-us/mountain.jpg")}
					/>
					<img src="/img/about-us/rocks.jpg" alt="Image 4"
						 onClick={() => openLightbox("/img/about-us/rocks.jpg")}
					/>
					<img src="/img/about-us/lake.jpg" alt="Image 5"
						 onClick={() => openLightbox("/img/about-us/lake.jpg")}
					/>
					<img src="/img/about-us/dog.jpg" alt="Image 6"
						 onClick={() => openLightbox("/img/about-us/dog.jpg")}
					/>
				</div>
			</div>
			{lightbox.isOpen && (
				<div className="lightbox" onClick={closeLightbox}>
					<img src={lightbox.imgSrc} alt="Lightbox" />
				</div>
			)}
		</div>
	);
};

export default AboutUs;