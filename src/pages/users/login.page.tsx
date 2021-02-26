import {FunctionComponent} from 'react';
import {
    BackType,
    AuthLayout
} from '../../components/auth/AuthLayout/AuthLayout';
import {AuthLogin} from '../../components/auth/AuthLogin/AuthLogin';

const LoginPage: FunctionComponent = () => {
    return (
        <AuthLayout backType={BackType.register}>
            <AuthLogin />
        </AuthLayout>
    );
};

export default LoginPage;
