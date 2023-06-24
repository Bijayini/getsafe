import React, { useState } from 'react';
import Input from '../../../../components/input';

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
            <button onClick={() => props.cb('email', email)}>Next</button>
        </>
    );
};
