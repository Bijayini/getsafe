import { fireEvent, render } from '@testing-library/react';
import { ProductIds } from '../../product-config';
import { Insurance } from './Insurance';
import { BrowserRouter } from 'react-router-dom';

describe('Insurance', () => {
    describe('For Developer Insurance', () => {
        const props = {
            productId: ProductIds.devIns,
        };

        test('should render Insurance without throwing error', () => {
            const { container, getByText } = render(
                <BrowserRouter>
                    <Insurance {...props} />
                </BrowserRouter>
            );

            expect(() => container).not.toThrow();
            expect(getByText('Email:')).toBeInTheDocument();
        });

        test('should go ahead with flow without any error', () => {
            const { getByText, getByTestId } = render(
                <BrowserRouter>
                    <Insurance {...props} />
                </BrowserRouter>
            );

            fireEvent.change(getByTestId('input-field'), {
                target: { value: 'sdf@sdf.com' },
            });
            fireEvent.submit(getByText('Next'));

            expect(getByText('Age:')).toBeInTheDocument();

            fireEvent.change(getByTestId('input-field'), {
                target: { value: '20' },
            });
            fireEvent.submit(getByText('Next'));

            expect(getByText('Age: 20')).toBeInTheDocument();
        });
    });

    describe('For Designer Insurance', () => {
        const props = {
            productId: ProductIds.designIns,
        };

        test('should render Insurance without throwing error', () => {
            const { container, getByText } = render(
                <BrowserRouter>
                    <Insurance {...props} />
                </BrowserRouter>
            );

            expect(() => container).not.toThrow();
            expect(getByText('First Name:')).toBeInTheDocument();
        });

        test('should go ahead with flow without any error', () => {
            const { getByText, getByTestId, getAllByTestId } = render(
                <BrowserRouter>
                    <Insurance {...props} />
                </BrowserRouter>
            );

            fireEvent.change(getAllByTestId('input-field')[0], {
                target: { value: 'Some' },
            });
            fireEvent.change(getAllByTestId('input-field')[1], {
                target: { value: 'Name' },
            });
            fireEvent.submit(getByText('Next'));

            fireEvent.change(getByTestId('input-field'), {
                target: { value: 'sdf@sdf.com' },
            });
            fireEvent.submit(getByText('Next'));

            expect(getByText('Age:')).toBeInTheDocument();

            fireEvent.change(getByTestId('input-field'), {
                target: { value: '20' },
            });
            fireEvent.submit(getByText('Next'));

            expect(getByText('Age: 20')).toBeInTheDocument();
            expect(getByText('Name: Some Name')).toBeInTheDocument();
        });
    });
});
