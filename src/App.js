import './App.css';
import React, {useState} from 'react';
import FirstScreen from "./components/first-screen/FirstScreen";
import ReviewsScreen from "./components/reviews_screen/ReviewsScreen";
import AboutUsScreen from "./components/about-us-screen/AboutUsScreen";
import Modal from './components/modal/Modal';

const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="app">
            <FirstScreen isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
            <ReviewsScreen />
            <AboutUsScreen />
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default App;