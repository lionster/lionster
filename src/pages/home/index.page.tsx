import Head from 'next/head';
import {environment} from 'shared/environment/environment';
import {LayoutComponent} from 'shared/layouts/layouts.types';
import banners from './banners.json';
import HomeBanner from './components/HomeBanner';
import HomeHeading from './components/HomeHeading';
import styles from './index.module.scss';

export interface HomePageProps {
}

const HomePage: LayoutComponent<HomePageProps> = () => {
    return (
        <>
            <Head>
                <title>{environment.brandName} | Online machine learning playground</title>
            </Head>
            <HomeHeading/>
            <div className={styles.container}>
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
