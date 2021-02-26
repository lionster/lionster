import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {DivAnd, DivComponent} from '../../utils';

export interface PublicPromo {
    id: number;

    icon: string;

    title: string;

    description: string;
}

export interface PublicPromoProps {
    promo: PublicPromo;
}

const ICON_MAP = {
    ['build']: <FaSearch />,
    ['teach']: <FaSearch />,
    ['share']: <FaSearch />
};

export const PublicPromoCard: DivComponent<PublicPromoProps> = ({
    className,
    promo
}) => {
    return (
        <DivAnd
            className="relative flex flex-col pl-5 pr-5 pb-6 pt-14 bg-gray-200 rounded-xl"
            and={className}
        >
            <div className="absolute -top-8 text-4xl bg-gray-100 p-4 rounded-xl">
                {ICON_MAP[promo.icon]}
            </div>
            <div className="font-bold text-xl mb-4">{promo.title}</div>
            <div>{promo.description}</div>
        </DivAnd>
    );
};
