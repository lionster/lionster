import {FunctionComponent} from 'react';
import {AuthHeading} from '../AuthHeading/AuthHeading';
import {AuthRegisterForm} from '../AuthRegisterForm/AuthRegisterForm';
import {AuthSocialLogins} from '../AuthSocialLogins/AuthSocialLogins';

export const AuthRegister: FunctionComponent = () => {
    return (
        <>
            <AuthHeading title="Create a new account" />
            <AuthRegisterForm />
            <div className="flex mx-auto mb-6">OR</div>
            <AuthSocialLogins className="mb-6" />
        </>
    );
};
