import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import Packages from './components/Packages';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => (
    <div className="app">
        <Header />
        <MainBanner />
        <Slider />
        <AboutUs />
        <Packages />
        <ContactForm />
        <Footer />
    </div>
);

export default App;
