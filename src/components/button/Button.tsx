import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

interface ButtonProps {
    linkTo?: string;
    label: string;
}

export const Button: React.FC<ButtonProps> = ({
    linkTo,
    label,
    ...restProps
}) => {
    if (linkTo) {
        return (
            <Link to={linkTo} {...restProps}>
                <button className="button">{label}</button>
            </Link>
        );
    }

    return (
        <button {...restProps} className="button">
            {label}
        </button>
    );
};
