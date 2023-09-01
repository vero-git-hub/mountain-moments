import React from 'react';
import './Navigation.css';
import CTAButton from "../buttons/CTAButton";

const Navigation = ({setModalOpen}) => {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="#reviews">Reviews</a></li>
                <li><img src="/img/main/separator.svg" alt="Separator" /></li>
                <li><a href="#about-us">About</a></li>
                <li><img src="/img/main/separator.svg" alt="Separator" /></li>
                <li><a href="#packages">Packages</a></li>
            </ul>
            <CTAButton setModalOpen={setModalOpen} />
        </nav>
    );
};

export default Navigation;