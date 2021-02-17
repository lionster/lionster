import {FunctionComponent} from 'react';
import {PublicLayout} from '../../../components/pages/PublicLayout';
import {RedirectLogoutContent} from '../../../components/pages/users/redirect/RedirectLogoutContent';
import {UsersLayout} from '../../../components/pages/users/UsersLayout';

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
