import {FunctionComponent} from 'react';
import {PublicLayout} from '../../components/pages/PublicLayout';
import {RegisterContent} from '../../components/pages/users/RegisterContent';
import {UsersLayout} from '../../components/pages/users/UsersLayout';

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
