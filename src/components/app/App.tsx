import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Insurance from '../../pages/insurance';
import Home from '../../pages/home';
import Purchase from '../../pages/purchase';
import NotFound from '../../pages/not-found';
import Header from '../../components/header';
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
                        element={<Insurance productId={ProductIds.devIns} />}
                    />
                    <Route
                        path={Products[ProductIds.designIns].url}
                        element={<Insurance productId={ProductIds.designIns} />}
                    />
                    <Route
                        path="/purchased/:productId"
                        element={<Purchase />}
                    />
                    <Route path="/" element={<Home />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </div>
    </Router>
);
