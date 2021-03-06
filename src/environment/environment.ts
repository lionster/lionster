/**
 * Defines all the properties that should be configured in our next.config.js
 */
export interface Environment {
    brandName: string;

    brandSlogan: string;

    production: boolean;
}

/**
 * Converts the env variable into a typed variable we can safely use.
 */
export const environment: Environment = {
    brandName: process.env.brandName,
    brandSlogan: process.env.brandSlogan,
    production: ((process.env.production as unknown) as boolean) !== false
};
