import { Age } from './Age';
import { fireEvent, render } from '@testing-library/react';

describe('<Age/>', () => {
    const props = {
        onNext: jest.fn(),
    };
    test('should render Age correctly with disabled button', () => {
        const { getByText } = render(<Age {...props} />);

        expect(getByText('Next')).toBeDisabled();
    });

    test('button should be disabled when user is entering age < 18', () => {
        const { getByTestId, getByText } = render(<Age {...props} />);
        const input = getByTestId('input-field');

        fireEvent.change(input, { target: { value: 16 } });

        expect(getByText('Next')).toBeDisabled();
    });

    test('button should be disabled when user is entering age < 100', () => {
        const { getByTestId, getByText } = render(<Age {...props} />);
        const input = getByTestId('input-field');

        fireEvent.change(input, { target: { value: 100 } });

        expect(getByText('Next')).toBeDisabled();
    });

    test('should call callback with age on clicking on Next button', () => {
        const { getByTestId, getByText } = render(<Age {...props} />);
        const input = getByTestId('input-field');
        const button = getByText('Next');

        fireEvent.change(input, { target: { value: 20 } });

        expect(button).not.toBeDisabled();

        fireEvent.submit(getByTestId('product-form'));

        expect(props.onNext).toHaveBeenCalledWith('age', 20);
    });
});
