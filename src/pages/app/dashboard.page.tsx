import {withSSRContext} from 'aws-amplify';
import {GetServerSideProps} from 'next';
import {FunctionComponent} from 'react';
import {Dashboard} from '../../components/dashboard/Dashboard/Dashboard';
import {DashboardLayout} from '../../components/dashboard/DashboardLayout/DashboardLayout';

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

const DashboardPage: FunctionComponent = () => {
    return (
        <DashboardLayout>
            <Dashboard />
        </DashboardLayout>
    );
};

export default DashboardPage;
