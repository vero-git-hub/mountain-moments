import React from 'react';
import './Footer.css';
import Logo from '../logo/Logo';
import CTAButton from '../button/CTAButton';

const Footer = ({ setModalOpen }) => {
    return (
        <div className="footer">
            <div className="footer-left">
                <Logo elementType="span" className="logo" />
                <span>— your’s elevated Adventures</span>
            </div>
            <div className="footer-right">
                <a href="tel:+1234567890">+1 234 567 890</a>
                <div className="social-icons">
                    <img src="/img/footer/instagram.png"  alt="instagram"/>
                    <img src="/img/footer/facebook.png"  alt="facebook"/>
                    <img src="/img/footer/telegram.png"  alt="telegram"/>
                </div>
                <CTAButton setModalOpen={setModalOpen} />
            </div>
        </div>
    );
};

export default Footer;