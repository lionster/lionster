import Head from 'next/head';
import {FunctionComponent} from 'react';
import styles from './PublicBoards.module.scss';

export const PublicBoards: FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Boards | Lionster</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Publicly shared boards</h1>
                <p className={styles.description}>List of boards goes here</p>
            </main>
        </div>
    );
};
