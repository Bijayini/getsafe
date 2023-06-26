import { Summary } from './Summary';
import { render } from '@testing-library/react';

describe('<Summary/>', () => {
    const props = {
        collectedData: {
            name: 'Some Name',
            age: 20,
            email: 'sdf@vb.in',
        },
    };

    test('should render Summary correctly when all data is present', () => {
        const { getByText } = render(<Summary {...props} />);

        expect(getByText('Name: Some Name')).toBeInTheDocument();
    });

    test('should render Summary correctly when name is missing', () => {
        const updatedProps = {
            collectedData: {
                ...props.collectedData,
                name: undefined,
            },
        };
        const { queryByText } = render(<Summary {...updatedProps} />);

        expect(queryByText('Name: Some Name')).toBeFalsy();
    });
});
