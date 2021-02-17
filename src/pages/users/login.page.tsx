import {FunctionComponent} from 'react';
import {PublicLayout} from '../../components/contents/layouts/PublicLayout';
import {LoginContent} from '../../components/contents/users/LoginContent';
import {UsersLayout} from '../../components/contents/layouts/UsersLayout';

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
