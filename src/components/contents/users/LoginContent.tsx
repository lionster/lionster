import Link from 'next/link';
import {AuthLoginForm} from '../../auth/AuthLoginForm/AuthLoginForm';
import {AuthSocialLogins} from '../../auth/AuthSocialLogins/AuthSocialLogins';
import {DivAnd, DivComponent} from '../../utils';

export const LoginContent: DivComponent = ({className}) => {
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
                <a className="btn btn-secondary">Create an account</a>
            </Link>
        </DivAnd>
    );
};
