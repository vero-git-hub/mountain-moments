import React from 'react';
import './Packages.css';

const Packages = ({ setModalOpen }) => {

	const description = "Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Augue neque gravida in fermentum et sollicitudin ac orci. Quam pellentesque nec nam aliquam sem. Aliquam ut porttitor leo a diam sollicitudin tempor. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Facilisis gravida neque convallis a cras semper. Netus et malesuada fames ac turpis egestas. Placerat in egestas erat imperdiet sed euismod. Nec tincidunt praesent semper feugiat nibh sed. Eget velit aliquet sagittis id consectetur. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit.";

	return (
		<div className="packages" id="packages">
			<h2>Packages</h2>
			<div className="packages-content">
				<div className="package-box">
					<h3>First package</h3>
					<p>{description}</p>
					<button className="cta-button" onClick={() => setModalOpen(true)}>To learn more</button>
				</div>
				<div className="package-box">
					<h3>Second package</h3>
					<p>{description}</p>
					<button className="cta-button" onClick={() => setModalOpen(true)}>To learn more</button>
				</div>
				<div className="package-box">
					<h3>Third package</h3>
					<p>{description}</p>
					<button className="cta-button" onClick={() => setModalOpen(true)}>To learn more</button>
				</div>
			</div>
		</div>
	);
}

export default Packages;