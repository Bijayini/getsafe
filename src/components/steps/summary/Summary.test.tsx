import React from 'react';
import { Summary } from './Summary';
import { render } from '@testing-library/react';
import { ProductIds } from '../../../product-config';
import { BrowserRouter } from 'react-router-dom';

describe('Summary', () => {
    const props = {
        collectedData: {
            name: 'Some Name',
            age: 20,
            email: 'sdf@vb.in',
        },
        productId: ProductIds.devIns,
    };

    test('should render Summary correctly when all data is present', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Summary {...props} />
            </BrowserRouter>
        );
        const purchaseLink = getByText('Purchase');
        const linkTo = `/purchased/${ProductIds.devIns}`;

        expect(getByText('Name: Some Name')).toBeInTheDocument();
        expect(purchaseLink.getAttribute('href')).toBe(linkTo);
    });

    test('should render Summary correctly when name is missing', () => {
        const updatedProps = {
            productId: ProductIds.designIns,
            collectedData: {
                ...props.collectedData,
                name: undefined,
            },
        };
        const { queryByText, getByText } = render(
            <BrowserRouter>
                <Summary {...updatedProps} />
            </BrowserRouter>
        );
        const purchaseLink = getByText('Purchase');
        const linkTo = `/purchased/${ProductIds.designIns}`;

        expect(queryByText('Name: Some Name')).toBeFalsy();
        expect(purchaseLink.getAttribute('href')).toBe(linkTo);
    });
});
