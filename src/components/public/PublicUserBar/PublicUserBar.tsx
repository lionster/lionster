import {Button} from '@material-ui/core';
import Link from 'next/link';
import {AUTH_BUTTON_TERMS} from '../../auth/auth.types';
import {useUser} from '../../hooks/users/useUser';
import {ROUTES} from '../../routes/routes.types';
import {DivComponent} from '../../utils/DivAnd';

export const PublicUserBar: DivComponent = ({className}) => {
    const user = useUser();
    const anonymous = (
        <>
            <Link href={ROUTES.REGISTER}>
                <Button className="ml-2">{AUTH_BUTTON_TERMS.REGISTER}</Button>
            </Link>
            <Link href={ROUTES.LOG_IN}>
                <Button className="ml-2">{AUTH_BUTTON_TERMS.LOG_IN}</Button>
            </Link>
        </>
    );
    const hasUser = (
        <Link href={ROUTES.LOG_OUT}>
            <Button className="ml-2">{AUTH_BUTTON_TERMS.LOG_OUT}</Button>
        </Link>
    );
    return <div className={className}>{user.user ? hasUser : anonymous}</div>;
};
