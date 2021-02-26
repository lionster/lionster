import {
    PublicSideBar,
    PublicSideBarAction
} from '../../public/PublicSideBar/PublicSideBar';
import {DivAnd, DivComponent} from '../../utils';

const ACTIONS: PublicSideBarAction[] = [
    {title: 'Start Now', route: '/boards/create', className: 'btn-primary'},
    {title: 'Trending', route: '/boards?trending=true'},
    {title: 'About', route: '/about'},
    {title: 'Blog', route: '/blog'}
];

export const DashboardLayout: DivComponent = ({className, children}) => {
    return (
        <DivAnd className="flex flex-grow bg-gray-100" and={className}>
            <PublicSideBar actions={ACTIONS} />
            <div className="flex flex-col w-full">{children}</div>
        </DivAnd>
    );
};
