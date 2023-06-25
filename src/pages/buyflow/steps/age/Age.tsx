import React, { useState } from 'react';
import Input from '../../../../components/input';
import StepForm from '../../../../components/stepForm';
import { StepData } from '../../../../type';

interface AgeProps {
    cb: (field: string, value: number) => void;
}

export const Age: React.FC<AgeProps> = (props) => {
    const [age, setAge] = useState(0);
    return (
        <StepForm
            onSubmit={() => props.cb(StepData.AGE, age)}
            isSubmitDisabled={!(age && age > 18 && age < 100)}
        >
            <Input
                type="number"
                label="Age"
                onChange={({ target: { value } }) => {
                    setAge(Number(value));
                }}
                value={age || ''}
                hint="> 18 & < 100"
                autoFocus
            />
        </StepForm>
    );
};
