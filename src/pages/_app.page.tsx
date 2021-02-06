import {AppProps} from 'next/app';
import {FunctionComponent} from 'react';
import 'styles/app.scss';

const App: FunctionComponent<AppProps> = ({Component, pageProps}) => {
    return (
        <Component {...pageProps} />
    );
};

export default App;
