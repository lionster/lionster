import Head from 'next/head';
import Link from 'next/link';
import {LayoutComponent} from '../components/layouts/layouts.types';
import styles from '../components/outlets/Home/Home.module.scss';

export interface IndexProps {
}

export const Index: LayoutComponent<IndexProps> = () => {
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
