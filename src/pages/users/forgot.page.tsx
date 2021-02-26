import {FunctionComponent} from 'react';
import {
    BackType,
    AuthLayout
} from '../../components/auth/AuthLayout/AuthLayout';
import {AuthForgot} from '../../components/auth/AuthForgot/AuthForgot';

const ForgotPage: FunctionComponent = () => {
    return (
        <AuthLayout backType={BackType.login}>
            <AuthForgot />
        </AuthLayout>
    );
};

export default ForgotPage;
