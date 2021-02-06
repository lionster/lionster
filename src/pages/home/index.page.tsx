import {HomeHeading, Promo, PromoCard} from 'components/home';
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
            <div className="max-w-screen-lg mx-auto px-4">
                <HomeHeading className="mx-auto my-6 max-w-2xl"/>
                {
                    (promos as Array<Promo>).map(({id, title, description}) =>
                        <PromoCard key={id}
                                   title={title}
                                   description={description}/>
                    )
                }
            </div>
        </>
    );
};

export default HomePage;
