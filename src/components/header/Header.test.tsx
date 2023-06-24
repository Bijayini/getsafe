import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
    it('renders the logo and link to home page', () => {
        const { getByRole } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const linkElement = getByRole('link');
        expect(linkElement.getAttribute('href')).toBe('/');
    });
});
