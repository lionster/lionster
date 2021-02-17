import {FunctionComponent} from 'react';
import {PublicLayout} from '../../../components/contents/layouts/PublicLayout';
import {RedirectLoginContent} from '../../../components/contents/users/redirect/RedirectLoginContent';
import {UsersLayout} from '../../../components/contents/layouts/UsersLayout';

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
