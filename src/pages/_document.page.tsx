import {ServerStyleSheets} from '@material-ui/styles';
import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';
import React from 'react';

export default class LionsterDocument extends Document {
    /**
     * @see https://github.com/vercel/next.js/issues/7322#issuecomment-751290533
     * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
     */
    static async getInitialProps(ctx: DocumentContext) {
        // Render app and page and get the context of the page with collected side effects.
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheets.collect(<App {...props} />)
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement()
            ]
        };
    }

    public render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                </Head>
                <body className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                    <noscript>
                        You need to enable JavaScript to use this website.
                    </noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
