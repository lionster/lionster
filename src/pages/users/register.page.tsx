import {FunctionComponent} from 'react';
import {
    BackType,
    AuthLayout
} from '../../components/auth/AuthLayout/AuthLayout';
import {AuthRegister} from '../../components/auth/AuthRegister/AuthRegister';

const RegisterPage: FunctionComponent = () => {
    return (
        <AuthLayout backType={BackType.login}>
            <AuthRegister />
        </AuthLayout>
    );
};

export default RegisterPage;
