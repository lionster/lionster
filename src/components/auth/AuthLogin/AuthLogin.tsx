import {Button} from '@material-ui/core';
import Link from 'next/link';
import {AuthLoginForm} from '../AuthLoginForm/AuthLoginForm';
import {AuthSocialLogins} from '../AuthSocialLogins/AuthSocialLogins';
import {DivAnd, DivComponent} from '../../utils/DivAnd';

export const AuthLogin: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex flex-col" and={className}>
            <div className="text-lg font-bold mx-auto mb-3">Sign in</div>
            <AuthSocialLogins />
            <div className="flex mx-auto mb-3">OR</div>
            <AuthLoginForm />
            <Link href="/users/forgot">
                <a className="mb-6">Forgot your password?</a>
            </Link>
            <Link href="/users/register">
                <Button variant="contained">Create an account</Button>
            </Link>
        </DivAnd>
    );
};
