import Link from 'next/link';
import {DivComponent} from '../utils';

export const UserBar: DivComponent = ({className}) => {
    return (
        <div className={className}>
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
        </div>
    );
};
