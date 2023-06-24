import { Input } from './Input';
import { fireEvent, render } from '@testing-library/react';

describe('Input component', () => {
    const props = {
        name: 'age',
        label: 'Age',
        onChange: jest.fn(),
        hint: '>18',
        testId: 'some-input',
    };

    it('should render Input correctly with hint', () => {
        const { getByTestId, getByText } = render(<Input {...props} />);
        const input = getByTestId('some-input');

        fireEvent.change(input, { target: { value: 15 } });

        expect(getByText(props.hint)).toBeVisible();
        expect(props.onChange).toHaveBeenCalledTimes(1);
    });

    it('should render Input correctly without hint when hint is undefined in props', () => {
        const updatedProps = {
            ...props,
            hint: undefined,
            testId: undefined,
        };
        const { queryByText, getByTestId } = render(
            <Input {...updatedProps} />
        );

        expect(queryByText(props.hint)).not.toBeInTheDocument();
        expect(getByTestId('input')).toBeInTheDocument();
    });
});
