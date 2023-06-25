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

const getCapitalizeText = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

export const Summary: React.FC<SummaryProps> = ({ collectedData }) => (
    <>
        {collectedData &&
            Object.entries(collectedData).map(([key, value]) => (
                <div key={key}>
                    {!!value && (
                        <span>
                            {getCapitalizeText(key)}: {value}
                        </span>
                    )}
                </div>
            ))}
        <div>
            <a href="/purchased=dev_ins">Purchase</a>
        </div>
    </>
);
