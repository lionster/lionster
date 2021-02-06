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
            <div className="max-w-screen-lg mx-auto px-4">
                <HomeHeading className="mx-auto my-6 max-w-2xl"/>
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
