import React from 'react';
import { StepData } from '../../../../type';
interface CollectedData {
    [StepData.EMAIL]: string;
    [StepData.AGE]: number;
    [StepData.NAME]?: string;
}
interface SummaryProps {
    collectedData: CollectedData;
}

export const Summary: React.FC<SummaryProps> = ({ collectedData }) => (
    <>
        {collectedData &&
            Object.entries(collectedData).map(([key, value]) => (
                <div>
                    {!!value && <span>{key}: </span>}
                    {!!value && <span>{value}</span>}
                </div>
            ))}
        <div>
            <a href="/purchased=dev_ins">Purchase</a>
        </div>
    </>
);
