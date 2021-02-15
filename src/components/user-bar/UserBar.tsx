import Link from 'next/link';
import {useUser} from '../../hooks/users';
import {DivComponent} from '../utils';

export const UserBar: DivComponent = ({className}) => {
    const user = useUser();
    const anonymous = (
        <>
            <Link href="/users/register">
                <a className="flex whitespace-nowrap ml-2 btn btn-primary">
                    Sign Up
                </a>
            </Link>
            <Link href="/users/login">
                <a className="flex whitespace-nowrap ml-2 btn btn-secondary">
                    Log In
                </a>
            </Link>
        </>
    );
    const hasUser = (
        <Link href="/users/logout">
            <a className="flex whitespace-nowrap ml-2 btn btn-secondary">
                Log Out
            </a>
        </Link>
    );
    return <div className={className}>{user.user ? hasUser : anonymous}</div>;
};
