import { render, fireEvent } from '@testing-library/react';
import { StepForm } from './StepForm';

describe('StepForm', () => {
    test('renders form with children and submit button', () => {
        const mockSubmitHandler = jest.fn();
        const { getByTestId, getByText } = render(
            <StepForm onSubmit={mockSubmitHandler} isSubmitDisabled={false}>
                <input type="text" name="name" data-testid="input" />
            </StepForm>
        );

        const formElement = getByTestId('product-form');
        const inputElement = getByTestId('input');
        const submitButton = getByText('Next');

        expect(formElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(submitButton).not.toBeDisabled();

        fireEvent.change(inputElement, { target: { value: 'John Doe' } });
        fireEvent.submit(submitButton);

        expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
    });

    test('disables submit button when isSubmitDisabled is true', () => {
        const { getByText } = render(
            <StepForm onSubmit={jest.fn()} isSubmitDisabled={true}>
                <input type="text" name="name" data-testid="input" />
            </StepForm>
        );

        const submitButton = getByText('Next');
        expect(submitButton).toBeDisabled();
    });
});
