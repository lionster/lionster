import Head from 'next/head';
import styles from './index.module.scss';

export default function Home() {
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
                </p>

            </main>
        </div>
    );
}
