import React from 'react';
import './Packages.css';

const Packages = ({ setModalOpen }) => (
	<div className="packages" id="packages">
		<h2>Packages</h2>
		<div className="packages-content">
			<div className="package-box">
				<h3>Package 1</h3>
				<p>Description for package 1...</p>
				<button onClick={() => setModalOpen(true)}>To learn more</button>
			</div>
			<div className="package-box">
				<h3>Package 2</h3>
				<p>Description for package 2...</p>
				<button onClick={() => setModalOpen(true)}>To learn more</button>
			</div>
			<div className="package-box">
				<h3>Package 3</h3>
				<p>Description for package 3...</p>
				<button onClick={() => setModalOpen(true)}>To learn more</button>
			</div>
		</div>
	</div>
);

export default Packages;