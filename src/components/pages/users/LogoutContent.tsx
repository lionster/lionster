import {Auth} from 'aws-amplify';
import {FunctionComponent} from 'react';
import {useUser} from '../../../hooks/users';
import {useEffectAsync} from '../../../hooks/utils';
import {UsersLayout} from './UsersLayout';

export const LogoutContent: FunctionComponent = () => {
    const user = useUser();

    useEffectAsync(async () => {
        await Auth.signOut();
    });

    const signingOut = <div>Please wait, we are signing you out.</div>;
    const signedOut = <div>You've been successfully signed out.</div>;

    return <UsersLayout>{user.user ? signingOut : signedOut}</UsersLayout>;
};
