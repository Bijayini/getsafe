import { Email } from './Email';
import { fireEvent, render } from '@testing-library/react';

describe('<Email/>', () => {
    const props = {
        onNext: jest.fn(),
    };
    test('should render Email correctly with disabled button', () => {
        const { getByText } = render(<Email {...props} />);

        expect(getByText('Next')).toBeDisabled();
    });

    test('button should be disabled when user enters invalid email', () => {
        const { getByTestId, getByText } = render(<Email {...props} />);
        const input = getByTestId('input-field');

        fireEvent.change(input, { target: { value: 'sdfsdf.com' } });

        expect(getByText('Next')).toBeDisabled();
    });

    test('should call callback with email data on form submit', () => {
        const { getByTestId, getByText } = render(<Email {...props} />);
        const input = getByTestId('input-field');
        const button = getByText('Next');

        fireEvent.change(input, { target: { value: 'sdf@sdf.com' } });

        expect(button).not.toBeDisabled();

        fireEvent.submit(getByTestId('product-form'));

        expect(props.onNext).toHaveBeenCalledWith('email', 'sdf@sdf.com');
    });
});
