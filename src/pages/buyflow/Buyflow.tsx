import React, { useState } from 'react';
import { ProductIds, Products } from '../../product-config';
import AgeStep from './steps/age';
import EmailStep from './steps/email';
import SummaryStep from './steps/summary';
interface BuyflowProps {
    productId: ProductIds;
}
interface Step {
    name: string;
    nextStep: string;
}

const getNextStep = (steps: Array<Step>, key: string) =>
    steps.find((step: Step) => step.name === key)?.nextStep || '';

export const BuyFlow: React.FC<BuyflowProps> = ({ productId }) => {
    const { steps } = Products[productId];
    const [currentStep, setStep] = useState(steps[0].name);
    const [collectedData, updateData] = useState({
        name: '',
        email: '',
        age: 0,
    });
    const getStepCallback = (nextStep: string) => (
        field: string,
        value: any
    ) => {
        updateData({ ...collectedData, [field]: value });
        setStep(nextStep);
    };

    return (
        <div className="page-container">
            <h4 className="page-text">Buying {Products[productId].name}</h4>
            {currentStep === 'name' && (
                <EmailStep cb={getStepCallback(getNextStep(steps, 'name'))} />
            )}
            {currentStep === 'email' && (
                <EmailStep cb={getStepCallback(getNextStep(steps, 'email'))} />
            )}
            {currentStep === 'age' && (
                <AgeStep cb={getStepCallback(getNextStep(steps, 'age'))} />
            )}
            {currentStep === 'summary' && (
                <SummaryStep collectedData={collectedData} />
            )}
        </div>
    );
};
