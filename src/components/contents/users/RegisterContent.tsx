import Link from 'next/link';
import {AuthRegisterForm} from '../../auth/AuthRegisterForm/AuthRegisterForm';
import {AuthSocialLogins} from '../../auth/AuthSocialLogins/AuthSocialLogins';
import {DivAnd, DivComponent} from '../../utils';

export const RegisterContent: DivComponent = ({className}) => {
    return (
        <DivAnd className="flex flex-col" and={className}>
            <div className="text-lg font-bold mx-auto mb-3">
                Create a new account
            </div>
            <AuthRegisterForm />
            <div className="flex mx-auto mb-6">OR</div>
            <AuthSocialLogins className="mb-6" />
            <Link href="/users/login">
                <a>Return to sign in.</a>
            </Link>
        </DivAnd>
    );
};
