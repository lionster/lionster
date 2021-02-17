import {withSSRContext} from 'aws-amplify';
import {GetServerSideProps} from 'next';
import {LayoutComponent} from '../../components/layouts';
import {DashboardContent} from '../../components/pages/app/dashboard/DashboardContent';
import {DashboardLayout} from '../../components/pages/app/dashboard/DashboardLayout';

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
    return <DashboardContent />;
};

DashboardPage.layoutComponent = DashboardLayout;

export default DashboardPage;
