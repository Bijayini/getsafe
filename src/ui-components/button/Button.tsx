import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    linkTo?: string;
    children: ReactNode;
    testId?: string;
}

export const Button: React.FC<ButtonProps> = ({
    linkTo,
    children,
    testId,
    ...restProps
}) => (
    <button {...restProps} className="button" data-testid={testId || 'button'}>
        {children}
    </button>
);
