import React from 'react';
import { Link } from 'react-router-dom';

interface SummaryProps {
    collectedData: {
        email: string;
        age: number;
    };
}

export const Summary: React.FC<SummaryProps> = (props) => {
    return (
        <>
            <div>Email: {props.collectedData.email}</div>
            <div>Age: {props.collectedData.age}</div>
            <div>
                <Link to="/purchased=dev_ins">Purchase</Link>
            </div>
        </>
    );
};
