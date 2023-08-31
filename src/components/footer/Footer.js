import React from 'react';
import './Footer.css';
import Logo from '../logo/Logo';
import CTAButton from '../buttons/CTAButton';

const Footer = ({ setModalOpen }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer-left">
                <Logo elementType="span" className="logo" />
                <span className="copyright"> Your’s elevated Adventures © {currentYear}</span>
            </div>
            <div className="footer-right">
                <a href="tel:+1234567890" className="phone">+1 234 567 890</a>
                <div className="social-icons">
                    <a href="#" >
                        <img src="/img/social/icon-instagram-24.png" alt="instagram"/>
                    </a>
                    <a href="#" >
                        <img src="/img/social/icon-facebook-24.png" alt="facebook"/>
                    </a>
                    <a href="#">
                        <img src="/img/social/icon-telegram-24.png" alt="telegram"/>
                    </a>
                </div>
                <CTAButton setModalOpen={setModalOpen} />
            </div>
        </div>
    );
};

export default Footer;