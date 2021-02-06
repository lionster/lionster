import Head from 'next/head';
import {environment} from 'shared/environment/environment';
import {LayoutComponent} from 'shared/layouts/layouts.types';
import styles from './index.module.scss';

export interface HomePageProps {
}

const HomePage: LayoutComponent<HomePageProps> = () => {
    return (
        <>
            <Head>
                <title>{environment.brandName} | Online machine learning playground</title>
            </Head>
            <div className={styles.container}>
                <div>Home</div>
            </div>
        </>
    );
};

export default HomePage;
