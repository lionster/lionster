import {FunctionComponent} from 'react';
import {AuthForgot} from '../../components/auth/AuthForgot/AuthForgot';
import {
    AuthLayout,
    BackType
} from '../../components/auth/AuthLayout/AuthLayout';
import {PageTitle} from '../../components/utils/PageTitle';

const ForgotPage: FunctionComponent = () => {
    return (
        <>
            <PageTitle title="Password recovery" />
            <AuthLayout backType={BackType.login}>
                <AuthForgot />
            </AuthLayout>
        </>
    );
};

export default ForgotPage;
