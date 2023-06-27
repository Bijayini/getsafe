import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Purchase } from './Purchase';
import { Products } from '../../product-config';

describe('Purchase', () => {
    test('displays successful purchase message and link', () => {
        const productId = 'dev_ins';

        const { getByText, getByRole } = render(
            <MemoryRouter initialEntries={[`/${productId}`]}>
                <Routes>
                    <Route path="/:productId" element={<Purchase />} />
                </Routes>
            </MemoryRouter>
        );

        const prodcutText = getByText(`${Products[productId].name}`);
        expect(prodcutText).toBeInTheDocument();

        const linkElement = getByRole('link', {
            name: 'Visit Insurance List',
        });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.getAttribute('href')).toBe('/');
    });

    test('displays NotFound component when product ID is invalid', () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={['/123']}>
                <Routes>
                    <Route path="/:productId" element={<Purchase />} />
                </Routes>
            </MemoryRouter>
        );

        expect(getByText('This page is not found 😢')).toBeInTheDocument();
    });
});
