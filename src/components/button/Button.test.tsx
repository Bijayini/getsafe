import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from './Button';

describe('Button component', () => {
    const props = {
        label: 'click me',
        onClick: jest.fn(),
    };
    it('renders a regular button without link if linkTo is not provided', () => {
        const { getByText } = render(<Button {...props} />);

        const buttonElement = getByText(props.label);
        fireEvent.click(buttonElement);
        expect(props.onClick).toHaveBeenCalled();
    });

    it('renders a button wrapped with a link if linkTo prop is provided', () => {
        const { getByRole } = render(
            <BrowserRouter>
                <Button linkTo="/" {...props} />
            </BrowserRouter>
        );

        const linkElement = getByRole('link');
        expect(linkElement.getAttribute('href')).toBe('/');
    });
});
