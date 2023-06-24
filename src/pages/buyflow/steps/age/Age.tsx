import React, { useState } from 'react';
import Input from '../../../../components/input';

interface AgeProps {
    cb: (field: string, value: number) => void;
}

export const Age: React.FC<AgeProps> = (props) => {
    const [age, setAge] = useState(0);
    return (
        <>
            <div>
                <Input
                    type="number"
                    label="Age"
                    onChange={({ target: { value } }) => {
                        setAge(Number(value));
                    }}
                    value={age}
                />
            </div>
            <button onClick={() => props.cb('age', age)}>Next</button>
        </>
    );
};
