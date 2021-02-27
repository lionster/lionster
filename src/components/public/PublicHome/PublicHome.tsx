import {FunctionComponent} from 'react';
import promos from '../../../config/promos.json';
import {PublicCard} from '../PublicCard/PublicCard';
import {PublicPromo, PublicPromoCard} from '../PublicPromoCard/PublicPromoCard';

const PublicHome: FunctionComponent = () => {
    return (
        <div className="flex flex-col max-w-screen-lg mx-auto px-4">
            <PublicCard className="mx-auto mb-24 max-w-2xl" />
            <div className="flex space-x-4">
                {(promos as PublicPromo[]).map((promo, indx) => (
                    <PublicPromoCard
                        className="w-1/3"
                        key={promo.id}
                        promo={promo}
                    />
                ))}
            </div>
        </div>
    );
};

export default PublicHome;
