import React from 'react';
import './Logo.css';
import {handleLogoClick} from "../Utils";

const Logo = ({ elementType = 'div', className }) => {
    const Element = elementType;

    return (
        <Element className={className} onClick={handleLogoClick}>
            Mountaintop Moments
        </Element>
    );
};

export default Logo;