import SideBar from 'components/side-bar/SideBar';
import {TopBar} from 'components/top-bar';
import {AppProps} from 'next/app';
import {FunctionComponent} from 'react';
import 'styles/app.scss';
import styles from './_app.module.scss';

const App: FunctionComponent<AppProps> = ({Component, pageProps}) => {
    return (
        <div className="flex flex-grow">
            <SideBar/>
            <div className="flex flex-col w-full">
                <TopBar/>
                <div className="flex flex-col flex-grow w-full">
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    );
};

export default App;
