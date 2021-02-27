import {FunctionComponent, useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import {AtomAuthEmail} from '../../atoms/atom-auth-email';
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
