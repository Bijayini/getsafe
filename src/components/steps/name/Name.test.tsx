import { Name } from './Name';
import { fireEvent, render } from '@testing-library/react';

describe('<Name/>', () => {
    const props = {
        onNext: jest.fn(),
    };
    test('should render Name correctly wtesth disabled button', () => {
        const { getByText } = render(<Name {...props} />);

        expect(getByText('Next')).toBeDisabled();
    });

    test('button should be disabled when user is entering empty string for one of the name field', () => {
        const { getAllByTestId, getByText } = render(<Name {...props} />);
        const firstName = getAllByTestId('input-field')[0];
        const lastName = getAllByTestId('input-field')[1];

        fireEvent.change(firstName, { target: { value: '   ' } });
        fireEvent.change(lastName, { target: { value: 'sdfsdf' } });

        expect(getByText('Next')).toBeDisabled();
    });

    test('should call callback on submtestting form', () => {
        const { getAllByTestId, getByText, getByTestId } = render(
            <Name {...props} />
        );
        const firstName = getAllByTestId('input-field')[0];
        const lastName = getAllByTestId('input-field')[1];
        const button = getByText('Next');

        fireEvent.change(firstName, { target: { value: 'fij' } });
        fireEvent.change(lastName, { target: { value: 'sdf' } });

        expect(button).not.toBeDisabled();

        fireEvent.submit(getByTestId('product-form'));

        expect(props.onNext).toHaveBeenCalledWith('name', 'fij sdf');
    });
});
