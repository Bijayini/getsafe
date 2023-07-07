import { ProductIds } from '../product-config';

export enum Currency {
    EUR = 'EUR',
    GBP = 'GBP',
}

interface ConfigurationData {
    age: number;
}

export const configurationData: ConfigurationData = {
    age: 0,
};

export interface PriceConfig {
    productId: ProductIds;
    configurationData: ConfigurationData;
}

export interface Price {
    monthlyPremium: number;
    currency: Currency;
}

export const getPrice = (priceConfig: PriceConfig): Promise<Price> =>
    new Promise((res, rej) => {
        switch (priceConfig.productId) {
            case ProductIds.designIns:
            case ProductIds.devIns: {
                return res({
                    monthlyPremium: priceConfig.configurationData.age * 2,
                    currency: Currency.EUR,
                });
            }
            default: {
                rej(new Error(`${priceConfig.productId} is not yet supported`));
            }
        }
    });
