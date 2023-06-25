import React, { useState } from 'react';
import Button from '../../../../components/button';
import Input from '../../../../components/input';
import { StepData } from '../../../../type';
import { validateEmail } from '../../../../utils/validateEmail';

interface EmailProps {
    cb: (field: string, value: string) => void;
}

export const Email: React.FC<EmailProps> = (props) => {
    const [email, setEmail] = useState('');
    return (
        <>
            <div>
                <Input
                    type="email"
                    label="Email"
                    onChange={({ target: { value } }) => {
                        setEmail(value);
                    }}
                    value={email}
                />
            </div>
            <Button
                onClick={() => props.cb(StepData.EMAIL, email)}
                disabled={!(email && validateEmail(email))}
            >
                Next
            </Button>
        </>
    );
};
