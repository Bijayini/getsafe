import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import { Pages } from '../../constants';
import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <Link to={Pages.home}>
                    <Logo />
                </Link>
            </div>
        </header>
    );
};
