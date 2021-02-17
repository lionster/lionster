import {FunctionComponent} from 'react';
import {
    BackType,
    UsersLayout
} from '../../components/contents/layouts/UsersLayout';
import {RegisterContent} from '../../components/contents/users/RegisterContent';

const RegisterPage: FunctionComponent = () => {
    return (
        <UsersLayout backType={BackType.login}>
            <RegisterContent />
        </UsersLayout>
    );
};

export default RegisterPage;
