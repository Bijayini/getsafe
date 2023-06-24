import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { ProductIds, Products } from '../../product-config';

test('renders list of insurance on home page', () => {
    const { getByText } = render(<App />);

    const instructionElement = getByText(
        'You can go ahead with below insurances:'
    );
    expect(instructionElement).toBeInTheDocument();

    const designLink = getByText(Products[ProductIds.designIns].name);

    expect(designLink.getAttribute('href')).toBe(
        Products[ProductIds.designIns].url
    );
});
