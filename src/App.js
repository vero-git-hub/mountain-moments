import './App.css';
import React, {useState} from 'react';
import FirstScreen from "./components/first_screen/FirstScreen";
import ReviewsScreen from "./components/reviews_screen/ReviewsScreen";
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import Packages from './components/Packages';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Modal from './components/modal/Modal';

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="app">
            <FirstScreen isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
            <ReviewsScreen />
            <AboutUs/>
            <Packages/>
            <ContactForm/>
            <Footer/>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default App;