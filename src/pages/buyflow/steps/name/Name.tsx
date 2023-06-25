import React, { useState } from 'react';
import Input from '../../../../components/input';
import StepForm from '../../../../components/stepForm';
import { StepData, StepProps } from '../../../../type';

export const Name: React.FC<StepProps> = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <StepForm
            onSubmit={() => props.cb(StepData.NAME, `${firstName} ${lastName}`)}
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
