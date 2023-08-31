import './App.css';
import React, {useState} from 'react';
import FirstScreen from "./components/first-screen/FirstScreen";
import Reviews from "./components/reviews/Reviews";
import AboutUs from "./components/about-us/AboutUs";
import Packages from "./components/packages/Packages";
import Footer from "./components/footer/Footer";
import Modal from './components/modal/Modal';

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="app">
            <FirstScreen isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
            <Reviews />
            <AboutUs />
            <Packages setModalOpen={setModalOpen}/>
            <Footer setModalOpen={setModalOpen} />
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default App;