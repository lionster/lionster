import {FunctionComponent} from 'react';
import {AuthLayout} from '../../../components/auth/AuthLayout/AuthLayout';
import {AuthRedirectLogout} from '../../../components/auth/AuthRedirectLogout/AuthRedirectLogout';

const RedirectLogoutPage: FunctionComponent = () => {
    return (
        <AuthLayout>
            <AuthRedirectLogout />
        </AuthLayout>
    );
};

export default RedirectLogoutPage;
