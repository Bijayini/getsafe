import React from 'react';
import Button from '../../components/button';
import { Pages } from '../../product-config';
import './home.css';

export const Home = () => {
    return (
        <div className="home-page">
            <h2 className="welcome-message">
                Welcome to Getsafe's Developer Insurance
            </h2>
            <Button linkTo={Pages.buyInsurance.dev} label="Get started" />
        </div>
    );
};
