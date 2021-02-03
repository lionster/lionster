import Head from 'next/head';
import styles from './boards.module.scss';

export default function Boards() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Boards | Lionster</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Publicly shared boards
                </h1>

                <p className={styles.description}>
                    List of boards goes here
                </p>
            </main>
        </div>
    );
}
