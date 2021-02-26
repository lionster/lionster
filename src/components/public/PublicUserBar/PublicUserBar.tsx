import {Button} from '@material-ui/core';
import Link from 'next/link';
import {useUser} from '../../hooks/users/useUser';
import {DivComponent} from '../../utils';

export const PublicUserBar: DivComponent = ({className}) => {
    const user = useUser();
    const anonymous = (
        <>
            <Link href="/users/register">
                <Button className="ml-2">Sign Up</Button>
            </Link>
            <Link href="/users/login">
                <Button className="ml-2">Log in</Button>
            </Link>
        </>
    );
    const hasUser = (
        <Link href="/users/logout">
            <Button className="ml-2">Log out</Button>
        </Link>
    );
    return <div className={className}>{user.user ? hasUser : anonymous}</div>;
};
