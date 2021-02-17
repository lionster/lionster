import {withSSRContext} from 'aws-amplify';
import {GetServerSideProps} from 'next';
import {LayoutComponent} from '../../../components/layouts';
import {BooksList} from './BooksList';
import {DashboardBar} from './DashboardBar';
import {DashboardLayout} from './DashboardLayout';

export const getServerSideProps: GetServerSideProps = async ({
    req,
    resolvedUrl
}) => {
    try {
        const SRR = withSSRContext({req});
        const session = await SRR.Auth.currentSession();
        if (session) {
            return {props: {}};
        }
    } catch (err) {}
    return {
        redirect: {
            permanent: false,
            destination: `/users/login?redirect=${encodeURIComponent(
                resolvedUrl
            )}`
        }
    };
};

const DashboardPage: LayoutComponent = () => {
    return (
        <>
            <DashboardBar />
            <BooksList className="mx-4" />
        </>
    );
};

DashboardPage.layoutComponent = DashboardLayout;

export default DashboardPage;
