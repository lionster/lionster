import {FunctionComponent} from 'react';

export interface Promo {
    id: string;

    title: string;

    description: string;
}

export interface PromoProps {
    title: string;

    description: string;
}

export const PromoCard: FunctionComponent<PromoProps> = ({title, description}) => {
    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
        </div>
    );
};
