import React from 'react';
import './Header.css';

const Header = ({ isModalOpen, setModalOpen }) => (
    <header className="header">
        <div className="logo">Mountaintop Moments</div>
        <nav className="navigation">
            <ul>
                <li><a href="#main-banner">Home</a></li>
                <li><img src = "/separator.svg" alt="Separator"/></li>
                <li><a href="#about-us">About</a></li>
                <li><img src = "/separator.svg" alt="Separator"/></li>
                <li><a href="#packages">Packages</a></li>
            </ul>
            <button className="cta-button" onClick={() => setModalOpen(!isModalOpen)}>Contact</button>
        </nav>
    </header>
);

export default Header;