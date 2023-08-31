import React from 'react';
import './Header.css';
import Navigation from "../navigation/Navigation";
import Logo from "../logo/Logo";

const Header = ({ setModalOpen }) => {
    return (
        <header className="header">
            <Logo elementType="div" className="logo" />
            <Navigation setModalOpen={setModalOpen} />
        </header>
    );
}

export default Header;