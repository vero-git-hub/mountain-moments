import './App.css';
import React, {useState} from 'react';
import Main from "./components/main/Main";
import Reviews from "./components/reviews/Reviews";
import AboutUs from "./components/about-us/AboutUs";
import Packages from "./components/packages/Packages";
import Footer from "./components/footer/Footer";
import Modal from './components/modal/Modal';
import ScrollToTopButton from './components/buttons/ScrollToTopButton';

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="app">
            <Main isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
            <Reviews />
            <AboutUs />
            <Packages setModalOpen={setModalOpen}/>
            <Footer setModalOpen={setModalOpen} />
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            <ScrollToTopButton />
        </div>
    );
};

export default App;