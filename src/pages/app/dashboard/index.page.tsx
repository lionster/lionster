import {BooksList, DashboardBar} from 'components/dashboard';
import {LayoutComponent} from 'components/layouts';
import {DashboardLayout} from './DashboardLayout';

const DashboardPage: LayoutComponent = () => {
    return (
        <>
            <DashboardBar/>
            <BooksList className="mx-4"/>
        </>
    );
};

DashboardPage.layoutComponent = DashboardLayout;

export default DashboardPage;
