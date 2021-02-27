import {FunctionComponent} from 'react';
import {AuthLayout} from '../../components/auth/AuthLayout/AuthLayout';
import {AuthLogout} from '../../components/auth/AuthLogout/AuthLogout';

const LogoutPage: FunctionComponent = () => {
    return (
        <AuthLayout>
            <AuthLogout />
        </AuthLayout>
    );
};

export default LogoutPage;
