import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StepData } from '../../../type';
import { ProductIds } from '../../../product-config';
import { configurationData, getPrice, Price } from '../../../api/price';
import './summary.css';

interface CollectedData {
    [StepData.EMAIL]: string;
    [StepData.AGE]: number;
    [StepData.NAME]?: string;
    price?: Price;
}
interface SummaryProps {
    collectedData: CollectedData;
    productId: ProductIds;
}

const getCapitalizeText = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

const getConfigurationData = (collectedData: CollectedData) => {
    return Object.keys(configurationData).reduce((acc, item: any) => {
        return collectedData[item]
            ? { ...acc, [item]: collectedData[item] }
            : acc;
    }, {});
};

const getPriceText = ({ monthlyPremium, currency }: Price) =>
    `${monthlyPremium} ${currency}`;

const omitKey = (value: any) =>
    typeof value !== 'object' ? !!value : !!value.monthlyPremium;

export const Summary: React.FC<SummaryProps> = ({
    collectedData,
    productId,
}) => {
    const [colletedDataWithPrice, setColletedDataWithPrice] = useState(
        collectedData
    );
    const [error, setError] = useState('');

    useEffect(() => {
        getPrice({
            productId,
            configurationData: getConfigurationData(collectedData),
        })
            .then((price: Price) =>
                setColletedDataWithPrice({ ...colletedDataWithPrice, price })
            )
            .catch((e) => setError(e.msg));
    }, [collectedData]);

    return (
        <div className="summary">
            {colletedDataWithPrice &&
                Object.entries(colletedDataWithPrice).map(([key, value]) => (
                    <div key={key}>
                        {omitKey(value) && (
                            <span>
                                {getCapitalizeText(key)}:{' '}
                                {key === 'price' ? getPriceText(value) : value}
                            </span>
                        )}
                    </div>
                ))}
            <div className="purchase-link">
                <Link to={`/purchased/${productId}`}>Purchase</Link>
            </div>
        </div>
    );
};
