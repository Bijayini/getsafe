import React, { useState } from 'react';

interface EmailProps {
    cb: (field: string, value: string) => void;
}

export const Email: React.FC<EmailProps> = (props) => {
    const [email, setEmail] = useState('');
    return (
        <>
            <div>
                Email:{' '}
                <input
                    type="email"
                    onChange={({ target: { value } }) => {
                        setEmail(value);
                    }}
                    value={email}
                ></input>
            </div>
            <button onClick={() => props.cb('email', email)}>Next</button>
        </>
    );
};
