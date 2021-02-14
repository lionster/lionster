import {SearchBar} from '../public';
import {SideBar, SideBarAction} from '../side-bar';
import {UserBar} from '../user-bar';
import {DivAnd, DivComponent} from '../utils';

const ACTIONS: SideBarAction[] = [
    {title: 'Start Now', route: '/boards/create', className: 'btn-primary'},
    {title: 'Trending', route: '/boards?trending=true'},
    {title: 'Blog', route: '/blog'},
    {title: 'About', route: '/about'},
    {title: 'Privacy Policy', route: '/privacy-policy'}
];

export const PublicLayout: DivComponent = ({className, children}) => {
    return (
        <DivAnd className="flex flex-grow" and={className}>
            <SideBar actions={ACTIONS} />
            <div className="flex flex-col w-full">
                <div className="flex p-4 w-full">
                    <SearchBar className="flex-grow" />
                    <UserBar className="ml-4" />
                </div>
                <div className="flex flex-col flex-grow w-full mt-8">
                    {children}
                </div>
            </div>
        </DivAnd>
    );
};
