import React, { FormHTMLAttributes, ReactNode } from 'react';
import Button from '../../ui-components/button';
import './stepForm.css';

interface StepFormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    isSubmitDisabled: boolean;
}

export const StepForm: React.FC<StepFormProps> = ({
    children,
    isSubmitDisabled,
    ...restProps
}) => (
    <form {...restProps} data-testid="product-form">
        {children}
        <div className="button-container">
            <Button disabled={isSubmitDisabled} type="submit">
                Next
            </Button>
        </div>
    </form>
);
