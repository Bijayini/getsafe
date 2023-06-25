import React, { useState } from 'react';
import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { StepData, StepProps } from '../../../../type';

export const Name: React.FC<StepProps> = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <div className="form-container">
            <Input
                onChange={({ target: { value } }) => setFirstName(value)}
                label="First Name"
                value={firstName}
                type="text"
            />
            <Input
                onChange={({ target: { value } }) => setLastName(value)}
                label="Last Name"
                value={lastName}
                type="text"
            />
            <Button
                onClick={() =>
                    props.cb(StepData.NAME, `${firstName} ${lastName}`)
                }
                disabled={!(firstName.trim() && lastName.trim())}
            >
                Next
            </Button>
        </div>
    );
};
