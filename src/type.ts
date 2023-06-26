export interface StepProps {
    onNext: (field: StepData, value: string | number) => void;
}

export enum StepData {
    EMAIL = 'email',
    AGE = 'age',
    NAME = 'name',
}
