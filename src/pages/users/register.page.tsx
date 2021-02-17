import {FunctionComponent} from 'react';
import {PublicLayout} from '../../components/contents/layouts/PublicLayout';
import {RegisterContent} from '../../components/contents/users/RegisterContent';
import {UsersLayout} from '../../components/contents/layouts/UsersLayout';

const RegisterPage: FunctionComponent = () => {
    return (
        <PublicLayout>
            <UsersLayout>
                <RegisterContent />
            </UsersLayout>
        </PublicLayout>
    );
};

export default RegisterPage;
