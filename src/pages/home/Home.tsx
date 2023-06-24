import React from 'react';
import Button from '../../components/button';
import { Pages } from '../../constants';
import './home.css';

export const Home = () => {
    return (
        <div className="home-page">
            <h2 className="welcome-message">
                Welcome to Getsafe's Developer Insurance
            </h2>
            <Button linkTo={Pages.buyInsuranceDev} label="Get started" />
        </div>
    );
};
