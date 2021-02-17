import {FunctionComponent} from 'react';
import {
    BackType,
    UsersLayout
} from '../../components/contents/layouts/UsersLayout';
import {LoginContent} from '../../components/contents/users/LoginContent';

const LoginPage: FunctionComponent = () => {
    return (
        <UsersLayout backType={BackType.register}>
            <LoginContent />
        </UsersLayout>
    );
};

export default LoginPage;
