import {useRouter} from 'next/router';
import {FunctionComponent} from 'react';
import {useSession} from '../../hooks/users/useSession';
import {usePromiseEffect} from '../../hooks/utils/usePromiseEffect';
import {AuthHeading} from '../AuthHeading/AuthHeading';

/**
 * @todo This component is temp, and taking the place of a router guard.
 */
export const AuthRedirectLogin: FunctionComponent = () => {
    const session = useSession();
    const router = useRouter();

    usePromiseEffect(async () => {
        if (session.status === 'loaded' && session.session) {
            await router.push('/app/dashboard');
        }
    }, [session]);

    return (
        <>
            <AuthHeading title="Logging in" />
            <div>We&apos;re preparing your workspace. One moment...</div>
        </>
    );
};
