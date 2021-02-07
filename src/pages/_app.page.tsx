import SideBar, {SideBarAction} from 'components/side-bar/SideBar';
import {TopBar} from 'components/top-bar';
import {AppProps} from 'next/app';
import {FunctionComponent} from 'react';
import 'styles/app.scss';

const ACTIONS: SideBarAction[] = [
    {title: 'Start Now', route: '/boards/create', className: 'btn-primary'},
    {title: 'Trending', route: '/boards?trending=true'},
    {title: 'About', route: '/about'},
    {title: 'Blog', route: '/blog'}
];

const App: FunctionComponent<AppProps> = ({Component, pageProps}) => {
    return (
        <div className="flex flex-grow">
            <SideBar actions={ACTIONS}/>
            <div className="flex flex-col w-full">
                <TopBar/>
                <div className="flex flex-col flex-grow w-full mt-8">
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    );
};

export default App;
