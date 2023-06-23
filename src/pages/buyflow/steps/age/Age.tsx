import React, { useState } from 'react';

interface AgeProps {
    cb: (field: string, value: number) => void;
}

export const Age: React.FC<AgeProps> = (props) => {
    const [age, setAge] = useState(0);
    return (
        <>
            <div>
                Age:{' '}
                <input
                    type="number"
                    onChange={({ target: { value } }) => {
                        setAge(Number(value));
                    }}
                    value={age}
                ></input>
            </div>
            <button onClick={() => props.cb('age', age)}>Next</button>
        </>
    );
};
