import React from 'react';
import './Footer.css';

const Footer = ({ setModalOpen }) => {
    return (
        <div className="footer">
            <div className="footer-left">
                <a href="#" className="footer-logo">Mountaintop Moments</a>
                <span>— your’s elevated Adventures</span>
            </div>
            <div className="footer-right">
                <a href="tel:+1234567890">+1 234 567 890</a>
                <div className="social-icons">
                    <img src="/img/footer/instagram.png" />
                    <img src="/img/footer/facebook.png" />
                    <img src="/img/footer/telegram.png" />
                </div>
                <button className="cta-button" onClick={() => setModalOpen(true)}>Contact</button>
            </div>
        </div>
    );
};

export default Footer;