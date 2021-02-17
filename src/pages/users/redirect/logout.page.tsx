import {FunctionComponent} from 'react';
import {PublicLayout} from '../../../components/contents/layouts/PublicLayout';
import {RedirectLogoutContent} from '../../../components/contents/users/redirect/RedirectLogoutContent';
import {UsersLayout} from '../../../components/contents/layouts/UsersLayout';

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
