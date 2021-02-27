import {FunctionComponent} from 'react';
import {AuthLayout} from '../../components/auth/AuthLayout/AuthLayout';
import {AuthLogout} from '../../components/auth/AuthLogout/AuthLogout';
import {PageTitle} from '../../components/utils/PageTitle';

const LogoutPage: FunctionComponent = () => {
    return (
        <>
            <PageTitle title="Sign out" />
            <AuthLayout>
                <AuthLogout />
            </AuthLayout>
        </>
    );
};

export default LogoutPage;
