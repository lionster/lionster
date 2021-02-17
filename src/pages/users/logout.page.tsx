import {FunctionComponent} from 'react';
import {PublicLayout} from '../../components/pages/PublicLayout';
import {LogoutContent} from '../../components/pages/users/LogoutContent';
import {UsersLayout} from '../../components/pages/users/UsersLayout';

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
