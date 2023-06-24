export const Pages = {
    home: '/',
    buyInsurance: {
        dev: '/buy/insurance_dev',
        design: '/buy/insurance_design',
    },
};

export enum ProductIds {
    devIns = 'dev_ins',
    designIns = 'design_ins',
}

export const Products = {
    [ProductIds.devIns]: {
        name: 'Developer Insurance',
        url: '/buy/insurance_dev',
        steps: [
            {
                name: 'email',
                nextStep: 'age',
            },
            {
                name: 'age',
                nextStep: 'summary',
            },
            {
                name: 'summary',
                nextStep: '',
            },
        ],
    },

    [ProductIds.designIns]: {
        name: 'Designer Insurance',
        url: '/buy/insurance_design',
        steps: [
            {
                name: 'name',
                nextStep: 'email',
            },
            {
                name: 'email',
                nextStep: 'age',
            },
            {
                name: 'age',
                nextStep: 'summary',
            },
            {
                name: 'summary',
                nextStep: '',
            },
        ],
    },
};
