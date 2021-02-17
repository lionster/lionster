import {FunctionComponent} from 'react';
import {PublicLayout} from '../../../components/pages/PublicLayout';
import {RedirectLoginContent} from '../../../components/pages/users/redirect/RedirectLoginContent';
import {UsersLayout} from '../../../components/pages/users/UsersLayout';

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
