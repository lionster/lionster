import {Auth} from 'aws-amplify';
import {FunctionComponent} from 'react';
import {useUser} from '../../hooks/users/useUser';
import {useEffectAsync} from '../../hooks/utils';

export const AuthLogout: FunctionComponent = () => {
    const user = useUser();

    useEffectAsync(async () => {
        await Auth.signOut();
    });

    const signingOut = <div>Please wait, we are signing you out.</div>;
    const signedOut = <div>You&apos;ve been successfully signed out.</div>;

    return <div>{user.user ? signingOut : signedOut}</div>;
};
