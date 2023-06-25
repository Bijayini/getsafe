import React, { useState } from 'react';
import Input from '../../../../components/input';
import { StepData } from '../../../../type';

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
                    hint=">18"
                />
            </div>
            <button
                onClick={() => props.cb(StepData.AGE, age)}
                disabled={!(age && age > 18)}
            >
                Next
            </button>
        </>
    );
};
