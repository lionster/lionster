import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

export default class LionsterDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx);
    }

    public render() {
        return (
            <Html className="dark"
                  lang="en"
            >
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                </Head>
                <body className='bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200'>
                <noscript>You need to enable JavaScript to use this website.</noscript>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
