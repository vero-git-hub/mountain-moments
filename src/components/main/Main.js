import React from 'react';
import Header from "../header/Header";
import Banner from "./Banner";
import './Main.css';

const Main = ({ isModalOpen, setModalOpen }) => (
    <div className="main">
        <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        <Banner />
    </div>
);

export default Main;