import {FunctionComponent} from 'react';
import {UsersLayout} from '../../../components/contents/layouts/UsersLayout';
import {RedirectLoginContent} from '../../../components/contents/users/redirect/RedirectLoginContent';

const RedirectLoginPage: FunctionComponent = () => {
    return (
        <UsersLayout>
            <RedirectLoginContent />
        </UsersLayout>
    );
};

export default RedirectLoginPage;
