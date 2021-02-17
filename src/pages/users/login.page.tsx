import {FunctionComponent} from 'react';
import {PublicLayout} from '../../components/pages/PublicLayout';
import {LoginContent} from '../../components/pages/users/LoginContent';
import {UsersLayout} from '../../components/pages/users/UsersLayout';

const LoginPage: FunctionComponent = () => {
    return (
        <PublicLayout>
            <UsersLayout>
                <LoginContent />
            </UsersLayout>
        </PublicLayout>
    );
};

export default LoginPage;
