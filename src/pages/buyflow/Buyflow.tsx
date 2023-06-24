import React, { useState } from 'react';
import { ProductIds } from '../../product-config';
import AgeStep from './steps/age';
import EmailStep from './steps/email';
import SummaryStep from './steps/summary';

interface BuyflowProps {
    productId: ProductIds;
}

const PRODUCT_IDS_TO_NAMES = {
    [ProductIds.devIns]: 'Developer Insurance',
};

export const Buyflow: React.FC<BuyflowProps> = (props) => {
    const [currentStep, setStep] = useState('email');
    const [collectedData, updateData] = useState({
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
        <div>
            <h4 className="buy-flow-header">
                Buying {PRODUCT_IDS_TO_NAMES[props.productId]}
            </h4>
            {(currentStep === 'email' && (
                <EmailStep cb={getStepCallback('age')} />
            )) ||
                (currentStep === 'age' && (
                    <AgeStep cb={getStepCallback('summary')} />
                )) ||
                (currentStep === 'summary' && (
                    <SummaryStep collectedData={collectedData} />
                ))}
        </div>
    );
};
