import React, { FormHTMLAttributes, ReactNode } from 'react';
import Button from '../button';

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
        <Button disabled={isSubmitDisabled} type="submit">
            Next
        </Button>
    </form>
);
