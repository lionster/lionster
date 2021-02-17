import {FunctionComponent} from 'react';
import {UsersLayout} from '../../components/contents/layouts/UsersLayout';
import {LogoutContent} from '../../components/contents/users/LogoutContent';

const LogoutPage: FunctionComponent = () => {
    return (
        <UsersLayout>
            <LogoutContent />
        </UsersLayout>
    );
};

export default LogoutPage;
