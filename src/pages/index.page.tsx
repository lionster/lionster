import Head from 'next/head';
import Link from 'next/link';
import {LayoutComponent} from '../../components/layouts/layouts.types';
import styles from './index.module.scss';

export interface HomePageProps {
}

const HomePage: LayoutComponent<HomePageProps> = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lionster</title>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Lionster
                </h1>
                <p className={styles.description}>
                    App goes here
                    <Link href="/boards">Boards</Link>
                </p>
            </main>
        </div>
    );
};

export default HomePage;
