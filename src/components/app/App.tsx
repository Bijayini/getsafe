import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Buyflow from '../../pages/buyflow';
import Logo from '../../assets/Logo';
import { ProductIds, Pages } from '../../constants';

export const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Logo />
                </header>
                <Routes>
                    <Route
                        path={Pages.buyInsuranceDev}
                        element={<Buyflow productId={ProductIds.devIns} />}
                    />
                    <Route
                        path={Pages.home}
                        element={
                            <div>
                                <p>Welcome to Getsafe's Developer Insurance</p>
                                <Link to={Pages.buyInsuranceDev}>
                                    Get started!
                                </Link>
                            </div>
                        }
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
};
