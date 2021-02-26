import Head from 'next/head';
import {FunctionComponent} from 'react';
import promos from '../../../config/promos.json';
import {environment} from '../../../environment/environment';
import {PublicCard} from '../PublicCard/PublicCard';
import {PublicPromo, PublicPromoCard} from '../PublicPromoCard/PublicPromoCard';

const PublicHome: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>
                    {environment.brandName} | Online machine learning playground
                </title>
            </Head>
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
        </>
    );
};

export default PublicHome;
