import {DashboardBar} from 'components/dashboard';
import {Boards} from 'components/dashboard/Boards';
import {SideBar, SideBarAction} from 'components/side-bar';
import {DivAnd, DivComponent} from 'components/utils';

const ACTIONS: SideBarAction[] = [
    {title: 'Start Now', route: '/boards/create', className: 'btn-primary'},
    {title: 'Trending', route: '/boards?trending=true'},
    {title: 'About', route: '/about'},
    {title: 'Blog', route: '/blog'}
];

export const DashboardLayout: DivComponent = ({className, children}) => {
    return (
        <DivAnd className="flex flex-grow" and={className}>
            <SideBar actions={ACTIONS}/>
            <div className="flex flex-col w-full">
                <DashboardBar/>
                <Boards className="mx-4"/>
            </div>
        </DivAnd>
    );
};
