import { render } from '@testing-library/react';
import { NotFound } from './NotFound';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound', () => {
    test('should render NotFound without throwing error', () => {
        const { container, getByText } = render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        );

        expect(() => container).not.toThrow();
        expect(getByText('This page is not found 😢')).toBeInTheDocument();
        const insuranceListLink = getByText('Visit Insurance List');

        expect(insuranceListLink.getAttribute('href')).toBe('/');
    });
});
