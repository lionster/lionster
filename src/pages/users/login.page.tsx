import {FunctionComponent} from 'react';
import {
    AuthLayout,
    BackType
} from '../../components/auth/AuthLayout/AuthLayout';
import {AuthLogin} from '../../components/auth/AuthLogin/AuthLogin';
import {PageTitle} from '../../components/utils/PageTitle';

const LoginPage: FunctionComponent = () => {
    return (
        <>
            <PageTitle title="Sign in" />
            <AuthLayout backType={BackType.register}>
                <AuthLogin />
            </AuthLayout>
        </>
    );
};

export default LoginPage;
