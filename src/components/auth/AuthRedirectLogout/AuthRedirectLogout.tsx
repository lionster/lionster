import {FunctionComponent} from 'react';
import {useUser} from '../../hooks/users';

export const AuthRedirectLogout: FunctionComponent = () => {
    const user = useUser();

    const loading = <div>Signing in, please wait...</div>;
    const success = <div>You&apos;ve been successfully signed out.</div>;
    const error = <div>There was a problem signing in.</div>;

    return (
        <>
            {user.status === 'loading'
                ? loading
                : user.status === 'error'
                ? error
                : success}
        </>
    );
};
