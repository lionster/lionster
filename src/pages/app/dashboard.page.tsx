import {withSSRContext} from 'aws-amplify';
import {GetServerSideProps} from 'next';
import {FunctionComponent} from 'react';
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

const DashboardPage: FunctionComponent = () => {
    return (
        <DashboardLayout>
            <DashboardContent />
        </DashboardLayout>
    );
};

export default DashboardPage;
