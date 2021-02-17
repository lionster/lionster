import {FunctionComponent} from 'react';
import {PublicLayout} from '../../components/contents/layouts/PublicLayout';
import {LogoutContent} from '../../components/contents/users/LogoutContent';
import {UsersLayout} from '../../components/contents/layouts/UsersLayout';

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
