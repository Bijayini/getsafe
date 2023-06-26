import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <>
            <h1>This page is not found 😢</h1>
            <Link to="/">Visit Insurance List</Link>
        </>
    );
};
