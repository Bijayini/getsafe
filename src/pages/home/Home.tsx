import React from 'react';
import { Link } from 'react-router-dom';
import { ProductIds, Products } from '../../product-config';
import './home.css';

export const Home = () => {
    return (
        <div className="home-page">
            <h2 className="welcome-message">
                Welcome to Getsafe's Developer Insurance!!
            </h2>
            <p className="instruction">
                You can go ahead with below insurances:
            </p>
            <ul className="insurance-list">
                {Object.keys(Products).map((key: string) => {
                    const { name, url } = Products[key as ProductIds];
                    return (
                        <li key={key}>
                            <Link to={url} className="insurance-link">
                                {name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
