import React from 'react';
import { Link } from 'react-router-dom';
import { StepData } from '../../../type';
import { ProductIds } from '../../../product-config';
import './summary.css';

interface CollectedData {
    [StepData.EMAIL]: string;
    [StepData.AGE]: number;
    [StepData.NAME]?: string;
}
interface SummaryProps {
    collectedData: CollectedData;
    productId: ProductIds;
}

const getCapitalizeText = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

export const Summary: React.FC<SummaryProps> = ({
    collectedData,
    productId,
}) => (
    <div className="summary">
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
        <div className="purchase-link">
            <Link to={`/purchased/${productId}`}>Purchase</Link>
        </div>
    </div>
);
