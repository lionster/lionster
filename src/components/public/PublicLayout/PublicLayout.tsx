import {PublicUserBar} from '../PublicUserBar/PublicUserBar';
import {DivAnd, DivComponent} from '../../utils/DivAnd';
import {PublicSearchBar} from '../PublicSearchBar/PublicSearchBar';
import {
    PublicSideBar,
    PublicSideBarAction
} from '../PublicSideBar/PublicSideBar';

const ACTIONS: PublicSideBarAction[] = [
    {title: 'Start Now', route: '/boards/create', className: 'btn-primary'},
    {title: 'Trending', route: '/boards?trending=true'},
    {title: 'Blog', route: '/blog'},
    {title: 'About', route: '/about'},
    {title: 'Privacy Policy', route: '/privacy-policy'}
];

export const PublicLayout: DivComponent = ({className, children}) => {
    return (
        <DivAnd className="flex flex-grow" and={className}>
            <PublicSideBar actions={ACTIONS} />
            <div className="flex flex-col w-full">
                <div className="flex p-4 w-full">
                    <PublicSearchBar className="flex-grow" />
                    <PublicUserBar className="ml-4" />
                </div>
                <div className="flex flex-col flex-grow w-full mt-8">
                    {children}
                </div>
            </div>
        </DivAnd>
    );
};
