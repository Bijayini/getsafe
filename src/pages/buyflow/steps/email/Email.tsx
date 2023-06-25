import React, { useState } from 'react';
import Input from '../../../../components/input';
import StepForm from '../../../../components/stepForm';
import { StepData } from '../../../../type';
import { validateEmail } from '../../../../utils/validateEmail';

interface EmailProps {
    cb: (field: string, value: string) => void;
}

export const Email: React.FC<EmailProps> = (props) => {
    const [email, setEmail] = useState('');
    return (
        <StepForm
            onSubmit={() => props.cb(StepData.EMAIL, email)}
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
