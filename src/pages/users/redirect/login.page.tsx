import {FunctionComponent} from 'react';
import {PublicLayout} from '../../../components/pages/layouts/PublicLayout';
import {RedirectLoginContent} from '../../../components/pages/users/redirect/RedirectLoginContent';
import {UsersLayout} from '../../../components/pages/layouts/UsersLayout';

const RedirectLoginPage: FunctionComponent = () => {
    return (
        <PublicLayout>
            <UsersLayout>
                <RedirectLoginContent />
            </UsersLayout>
        </PublicLayout>
    );
};

export default RedirectLoginPage;
