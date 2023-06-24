import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buyflow from '../../pages/buyflow';
import Home from '../../pages/home';
import Header from '../header';
import { ProductIds, Pages } from '../../constants';
import './app.css';

export const App = () => (
    <Router>
        <div className="app">
            <Header />
            <div className="app-content">
                <Routes>
                    <Route
                        path={Pages.buyInsuranceDev}
                        element={<Buyflow productId={ProductIds.devIns} />}
                    />
                    <Route path={Pages.home} element={<Home />}></Route>
                </Routes>
            </div>
        </div>
    </Router>
);
