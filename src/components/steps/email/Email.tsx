import React, { useState } from 'react';
import Input from '../../../ui-components/input';
import StepForm from '../../step-form';
import { StepData, StepProps } from '../../../type';
import { validateEmail } from '../../../utils/validateEmail';

export const Email: React.FC<StepProps> = ({ onNext }) => {
    const [email, setEmail] = useState('');
    return (
        <StepForm
            onSubmit={() => onNext(StepData.EMAIL, email)}
            isSubmitDisabled={!(email && validateEmail(email))}
        >
            <Input
                type="email"
                label="Email"
                onChange={({ target: { value } }) => {
                    setEmail(value);
                }}
                value={email}
                autoFocus
            />
        </StepForm>
    );
};
