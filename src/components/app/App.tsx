import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buyflow from '../../pages/buyFlow';
import Home from '../../pages/home';
import Header from '../header';
import { ProductIds, Products } from '../../product-config';
import './app.css';

export const App = () => (
    <Router>
        <div className="app">
            <Header />
            <div className="app-content">
                <Routes>
                    <Route
                        path={Products[ProductIds.devIns].url}
                        element={<Buyflow productId={ProductIds.devIns} />}
                    />
                    <Route
                        path={Products[ProductIds.designIns].url}
                        element={<Buyflow productId={ProductIds.designIns} />}
                    />
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </div>
        </div>
    </Router>
);
