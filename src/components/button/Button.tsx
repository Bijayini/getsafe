import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    linkTo?: string;
    children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    linkTo,
    children,
    ...restProps
}) => (
    <button {...restProps} className="button">
        {children}
    </button>
);
