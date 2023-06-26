import React, { useCallback, useState } from 'react';
import { ProductIds, Products } from '../../product-config';
import NameStep from '../../components/steps/name';
import AgeStep from '../../components/steps/age';
import EmailStep from '../../components/steps/email';
import SummaryStep from '../../components/steps/summary';
import { StepData } from '../../type';
import './insurance.css';

interface InsuranceProps {
    productId: ProductIds;
}

interface Step {
    name: string;
    nextStep: string;
}

const getNextStep = (steps: Array<Step>, key: StepData) =>
    steps.find((step: Step) => step.name === key)?.nextStep || '';

export const Insurance: React.FC<InsuranceProps> = ({ productId }) => {
    const { steps } = Products[productId];
    const [currentStep, setStep] = useState(steps[0].name);
    const [collectedData, updateData] = useState({
        name: '',
        email: '',
        age: 0,
    });

    const getStepCallback = useCallback(
        (field: StepData, value: string | number) => {
            updateData({ ...collectedData, [field]: value });
            setStep(getNextStep(steps, currentStep as StepData));
        },
        [currentStep, steps, collectedData]
    );

    return (
        <div className="page-container">
            <h4 className="page-text">Buying {Products[productId].name}</h4>
            {currentStep === 'name' && <NameStep onNext={getStepCallback} />}
            {currentStep === 'email' && <EmailStep onNext={getStepCallback} />}
            {currentStep === 'age' && <AgeStep onNext={getStepCallback} />}
            {currentStep === 'summary' && (
                <SummaryStep collectedData={collectedData} />
            )}
        </div>
    );
};
