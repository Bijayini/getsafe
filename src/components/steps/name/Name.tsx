import React, { useState } from 'react';
import Input from '../../../ui-components/input';
import StepForm from '../../step-form';
import { StepData, StepProps } from '../../../type';

export const Name: React.FC<StepProps> = ({ onNext }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <StepForm
            onSubmit={() => onNext(StepData.NAME, `${firstName} ${lastName}`)}
            isSubmitDisabled={!(firstName.trim() && lastName.trim())}
        >
            <Input
                onChange={({ target: { value } }) => setFirstName(value)}
                label="First Name"
                value={firstName}
                type="text"
                autoFocus
            />
            <Input
                onChange={({ target: { value } }) => setLastName(value)}
                label="Last Name"
                value={lastName}
                type="text"
            />
        </StepForm>
    );
};
