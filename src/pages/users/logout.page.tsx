import {FunctionComponent} from 'react';
import {PublicLayout} from '../../components/pages/layouts/PublicLayout';
import {LogoutContent} from '../../components/pages/users/LogoutContent';
import {UsersLayout} from '../../components/pages/layouts/UsersLayout';

const LogoutPage: FunctionComponent = () => {
    return (
        <PublicLayout>
            <UsersLayout>
                <LogoutContent />
            </UsersLayout>
        </PublicLayout>
    );
};

export default LogoutPage;
