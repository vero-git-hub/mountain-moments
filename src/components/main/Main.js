import React from 'react';
import Header from "../header/Header";
import Banner from "./Banner";
import './Main.css';

const Main = ({ isModalOpen, setModalOpen }) => (
    <div className="main">
        <div className="header-container">
            <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        </div>
        <div className="banner-container">
            <Banner />
        </div>
    </div>
);

export default Main;