import Head from 'next/head';
import {FunctionComponent} from 'react';
import {environment} from 'environment/environment';
import banners from './banners.json';
import HomeBanner from './components/HomeBanner';
import HomeHeading from './components/HomeHeading';

export interface HomePageProps {
}

const HomePage: FunctionComponent<HomePageProps> = () => {
    return (
        <>
            <Head>
                <title>{environment.brandName} | Online machine learning playground</title>
            </Head>
            <div className="container mx-auto px-2">
                <HomeHeading/>
                {
                    banners.map(({title, description}) =>
                        <HomeBanner key={title}
                                    title={title}
                                    description={description}/>
                    )
                }
            </div>
        </>
    );
};

export default HomePage;
