import {FunctionComponent} from 'react';
import {UsersLayout} from '../UsersLayout';
import {useUser} from '../../../../hooks/users';

export const RedirectLogoutContent: FunctionComponent = () => {
    const user = useUser();

    const loading = <div>Signing in, please wait...</div>;
    const success = <div>You've been successfully signed out.</div>;
    const error = <div>There was a problem signing in.</div>;

    return (
        <UsersLayout>
            {user.status === 'loading'
                ? loading
                : user.status === 'error'
                ? error
                : success}
        </UsersLayout>
    );
};
