import {Button} from '@material-ui/core';
import Link from 'next/link';
import {FunctionComponent} from 'react';
import {ROUTES} from '../../routes/routes.types';
import {AUTH_BUTTON_TERMS} from '../auth.types';
import {AuthHeading} from '../AuthHeading/AuthHeading';
import {AuthLoginForm} from '../AuthLoginForm/AuthLoginForm';
import {AuthSocialLogins} from '../AuthSocialLogins/AuthSocialLogins';

export const AuthLogin: FunctionComponent = () => {
    return (
        <>
            <AuthHeading title={AUTH_BUTTON_TERMS.LOG_IN} />
            <AuthSocialLogins />
            <div className="flex mx-auto mb-3">OR</div>
            <AuthLoginForm />
            <Link href={ROUTES.FORGOT}>
                <a className="mb-6">Forgot your password?</a>
            </Link>
            <Link href={ROUTES.REGISTER}>
                <Button variant="outlined" color="primary">
                    Create an account
                </Button>
            </Link>
        </>
    );
};
