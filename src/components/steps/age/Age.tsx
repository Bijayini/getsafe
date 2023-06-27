import React, { useState } from 'react';
import Input from '../../../ui-components/input';
import StepForm from '../../step-form';
import { StepData, StepProps } from '../../../type';

export const Age: React.FC<StepProps> = ({ onNext }) => {
    const [age, setAge] = useState(0);
    return (
        <StepForm
            onSubmit={() => onNext(StepData.AGE, age)}
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
