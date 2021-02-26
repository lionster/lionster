import {FunctionComponent} from 'react';
import {AuthLayout} from '../../../components/auth/AuthLayout/AuthLayout';
import {AuthRedirectLogin} from '../../../components/auth/AuthRedirectLogin/AuthRedirectLogin';

const RedirectLoginPage: FunctionComponent = () => {
    return (
        <AuthLayout>
            <AuthRedirectLogin />
        </AuthLayout>
    );
};

export default RedirectLoginPage;
