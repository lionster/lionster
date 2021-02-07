import {Promo, PromoCard, WelcomeCard} from 'components/home';
import {environment} from 'environment/environment';
import Head from 'next/head';
import {FunctionComponent} from 'react';
import promos from './promos.json';

export interface HomePageProps {
}

const HomePage: FunctionComponent<HomePageProps> = () => {
    return (
        <>
            <Head>
                <title>{environment.brandName} | Online machine learning playground</title>
            </Head>
            <div className="flex flex-col max-w-screen-lg mx-auto px-4">
                <WelcomeCard className="mx-auto mb-24 max-w-2xl"/>
                <div className="flex space-x-4">
                    {
                        (promos as Promo[]).map((promo, indx) => <PromoCard
                            className="w-1/3"
                            key={promo.id} promo={promo}
                        />)
                    }
                </div>
            </div>
        </>
    );
};

export default HomePage;
