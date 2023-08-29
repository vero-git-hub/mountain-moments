import React from 'react';
import Header from "./Header";
import MainBanner from "./MainBanner";
import './FirstScreen.css';

const FirstScreen = () => (
    <div className="first-screen">
        <Header />
        <MainBanner />
    </div>
);

export default FirstScreen;