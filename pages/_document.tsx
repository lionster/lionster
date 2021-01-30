import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';

export default class LionsterDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx);
    }

    public render() {
        return (
            <Html>
                <Head>
                    <title>Lionster</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
