import React, { FC, InputHTMLAttributes } from 'react';
import './input.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    testId?: string;
    hint?: string;
}

export const Input: FC<Props> = ({
    label,
    type,
    hint,
    testId,
    ...restProps
}) => (
    <div className="input-wrapper">
        <label>{label}: </label>
        <input
            type={type || 'text'}
            data-testid={testId || 'input-field'}
            {...restProps}
        />
        {!!hint && (
            <span className="input-hint" data-testid="input-hint">
                {hint}
            </span>
        )}
    </div>
);
