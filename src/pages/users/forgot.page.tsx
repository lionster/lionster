import {FunctionComponent} from 'react';
import {AuthForgot} from '../../components/auth/AuthForgot/AuthForgot';
import {
    AuthLayout,
    BackType
} from '../../components/auth/AuthLayout/AuthLayout';

const ForgotPage: FunctionComponent = () => {
    return (
        <AuthLayout backType={BackType.login}>
            <AuthForgot />
        </AuthLayout>
    );
};

export default ForgotPage;
