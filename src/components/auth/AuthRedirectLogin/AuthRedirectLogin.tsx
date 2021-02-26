import {useRouter} from 'next/router';
import {FunctionComponent} from 'react';
import {useSession} from '../../hooks/users/useSession';
import {useEffectAsync} from '../../hooks/utils';

/**
 * @todo This component is temp, and taking the place of a router guard.
 */
export const AuthRedirectLogin: FunctionComponent = () => {
    const session = useSession();
    const router = useRouter();

    useEffectAsync(async () => {
        if (session.status === 'loaded' && session.session) {
            await router.push('/app/dashboard');
        }
    }, [session]);

    return <div>We're preparing your workspace. One moment...</div>;
};
