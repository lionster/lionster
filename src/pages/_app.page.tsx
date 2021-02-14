import {Amplify} from 'aws-amplify';
import {AppProps} from 'next/app';
import {FunctionComponent} from 'react';
import 'styles/app.scss';
import awsExports from '../aws-exports';
import {LayoutComponent, PublicLayout} from '../components/layouts';

Amplify.configure({...awsExports, ssr: true});

interface LayoutProps {
    Component: LayoutComponent;
}

const App: FunctionComponent<AppProps & LayoutProps> = ({Component, pageProps}) => {
    const Layout = Component.layoutComponent || PublicLayout;
    const layoutProps = Component.layoutProps || {};
    return (
        <Layout {...layoutProps}>
            <Component {...pageProps} />
        </Layout>
    );
};

export default App;
