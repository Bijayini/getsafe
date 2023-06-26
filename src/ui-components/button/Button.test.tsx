import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Button } from './Button';

describe('Button component', () => {
    const props = {
        onClick: jest.fn(),
    };
    test('renders a button', () => {
        const { getByText } = render(<Button {...props}>click me</Button>);

        const buttonElement = getByText('click me');
        fireEvent.click(buttonElement);
        expect(props.onClick).toHaveBeenCalledTimes(1);
    });
});
