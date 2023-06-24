import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Products, ProductIds } from '../../product-config';
import { Home } from './Home';

describe('<Home />', () => {
    it('should render without throwing error', () => {
        expect(() =>
            render(
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            )
        ).not.toThrow();
    });

    it('should render link to designer and developer insurance', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        const designLink = getByText(Products[ProductIds.designIns].name);
        const devLink = getByText(Products[ProductIds.devIns].name);

        expect(designLink.getAttribute('href')).toBe(
            Products[ProductIds.designIns].url
        );
        expect(devLink.getAttribute('href')).toBe(
            Products[ProductIds.devIns].url
        );
    });
});
