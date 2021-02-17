import {useRouter} from 'next/router';
import {FunctionComponent} from 'react';
import {useSession} from '../../../hooks/users/useSession';
import {useEffectAsync} from '../../../hooks/utils';
import {UsersLayout} from '../UsersLayout';

/**
 * @todo This component is temp, and taking the place of a router guard.
 */
const RedirectPage: FunctionComponent = () => {
    const session = useSession();
    const router = useRouter();

    useEffectAsync(async () => {
        if (session.status === 'loaded' && session.session) {
            await router.push('/app/dashboard');
        }
    }, [session]);

    return (
        <UsersLayout>
            <div>We're preparing your workspace. One moment...</div>
        </UsersLayout>
    );
};

export default RedirectPage;
