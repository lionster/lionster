import {FunctionComponent} from 'react';
import {useUser} from '../../../hooks/users';
import {UsersLayout} from '../UsersLayout';

/**
 * @todo This component is temp, and taking the place of a router guard.
 */
const RedirectPage: FunctionComponent = () => {
    const user = useUser();
    return (
        <UsersLayout>
            <div>You've successfully signed .</div>
        </UsersLayout>
    );
};

export default RedirectPage;
