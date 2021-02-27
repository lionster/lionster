import {Auth} from 'aws-amplify';
import {FunctionComponent} from 'react';
import {useUser} from '../../hooks/users/useUser';
import {usePromiseEffect} from '../../hooks/utils/usePromiseEffect';
import {AUTH_BUTTON_TERMS} from '../auth.types';
import {AuthHeading} from '../AuthHeading/AuthHeading';

export const AuthLogout: FunctionComponent = () => {
    const user = useUser();

    usePromiseEffect(async () => {
        await Auth.signOut();
    }, []);

    const signingOut = <div>Please wait, we are signing you out.</div>;
    const signedOut = <div>You&apos;ve been successfully signed out.</div>;

    return (
        <>
            <AuthHeading title={AUTH_BUTTON_TERMS.LOG_OUT} />
            {user.user ? signingOut : signedOut}
        </>
    );
};
