import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header', () => {
    test('renders the logo and link to home page', () => {
        const { getByRole } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const linkElement = getByRole('link');
        expect(linkElement.getAttribute('href')).toBe('/');
    });
});
