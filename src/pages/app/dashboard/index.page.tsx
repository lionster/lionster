import {LayoutComponent} from '../../../components/layouts';
import {BooksList} from './BooksList';
import {DashboardBar} from './DashboardBar';
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
