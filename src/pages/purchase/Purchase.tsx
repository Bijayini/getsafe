import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductIds, Products } from '../../product-config';
import NotFound from '../not-found';

export const Purchase = () => {
    const { productId } = useParams<{ productId: ProductIds }>();

    if (!productId || !Products[productId]) {
        return <NotFound />;
    }

    return (
        <div>
            <p>
                You have successfully purchased{' '}
                <b>{Products[productId].name}</b>! 🎉🎉
            </p>
            <Link to="/">Visit Insurance List</Link>
        </div>
    );
};
