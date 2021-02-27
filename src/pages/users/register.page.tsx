import {FunctionComponent} from 'react';
import {useRecoilValue} from 'recoil';
import {AtomAuthEmail} from '../../atoms/atom-auth-email';
import {AuthConfirm} from '../../components/auth/AuthConfirm/AuthConfirm';
import {
    AuthLayout,
    BackType
} from '../../components/auth/AuthLayout/AuthLayout';
import {AuthRegister} from '../../components/auth/AuthRegister/AuthRegister';

const RegisterPage: FunctionComponent = () => {
    const authEmail = useRecoilValue(AtomAuthEmail);
    return (
        <AuthLayout backType={BackType.login}>
            {authEmail ? <AuthConfirm /> : <AuthRegister />}
        </AuthLayout>
    );
};

export default RegisterPage;
