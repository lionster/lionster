import {AppProps} from 'next/app';
import {FunctionComponent} from 'react';
import 'styles/app.scss';
import '../config/config-amplify';

const AppPage: FunctionComponent<AppProps> = ({Component, pageProps}) => {
    return <Component {...pageProps} />;
};

export default AppPage;
