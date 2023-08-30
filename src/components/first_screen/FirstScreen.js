import React from 'react';
import Header from "./Header";
import MainBanner from "./MainBanner";
import './FirstScreen.css';

const FirstScreen = ({ isModalOpen, setModalOpen }) => (
    <div className="first-screen">
        <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        <MainBanner />
    </div>
);

export default FirstScreen;