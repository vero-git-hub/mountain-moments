import './App.css';
import React from 'react';
import FirstScreen from "./components/FirstScreen";
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import Packages from './components/Packages';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => (
    <div className="app">
        <FirstScreen />
        <Slider />
        <AboutUs />
        <Packages />
        <ContactForm />
        <Footer />
    </div>
);

export default App;
