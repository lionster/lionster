import {FunctionComponent} from 'react';
import {PublicLayout} from '../../../components/pages/layouts/PublicLayout';
import {RedirectLogoutContent} from '../../../components/pages/users/redirect/RedirectLogoutContent';
import {UsersLayout} from '../../../components/pages/layouts/UsersLayout';

const RedirectLogoutPage: FunctionComponent = () => {
    return (
        <PublicLayout>
            <UsersLayout>
                <RedirectLogoutContent />
            </UsersLayout>
        </PublicLayout>
    );
};

export default RedirectLogoutPage;
