import SideBar from 'components/side-bar';
import TopBar from 'components/top-bar';
import {AppProps} from 'next/app';
import {FunctionComponent} from 'react';
import 'styles/app.scss';

const App: FunctionComponent<AppProps> = ({Component, pageProps}) => {
    return (
        <div className="flex">
            <SideBar/>
            <div className="flex flex-col">
                <TopBar/>
                <div>
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    );
};

export default App;
