import {FunctionComponent} from 'react';
import {UsersLayout} from '../../../components/contents/layouts/UsersLayout';
import {RedirectLogoutContent} from '../../../components/contents/users/redirect/RedirectLogoutContent';

const RedirectLogoutPage: FunctionComponent = () => {
    return (
        <UsersLayout>
            <RedirectLogoutContent />
        </UsersLayout>
    );
};

export default RedirectLogoutPage;
