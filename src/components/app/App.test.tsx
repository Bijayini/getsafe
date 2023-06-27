import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';
import { ProductIds, Products } from '../../product-config';

test('renders app without any error', () => {
    const { getByText, container } = render(<App />);
    expect(() => container).not.toThrow();

    const instructionElement = getByText(
        'You can go ahead with below insurances:'
    );
    expect(instructionElement).toBeInTheDocument();

    const designLink = getByText(Products[ProductIds.designIns].name);

    expect(designLink.getAttribute('href')).toBe(
        Products[ProductIds.designIns].url
    );
});
